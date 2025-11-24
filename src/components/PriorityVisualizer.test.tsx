import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PriorityVisualizer from './PriorityVisualizer';

describe('PriorityVisualizer', () => {
  describe('Initial Rendering', () => {
    it('should render the component title', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText('Context Priority Stack')).toBeInTheDocument();
    });

    it('should render the subtitle', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText('Toggle layers to see how Copilot builds context')).toBeInTheDocument();
    });

    it('should render all three layer buttons', () => {
      render(<PriorityVisualizer />);
      
      // Use getAllByText to handle multiple instances (button label + visualization)
      const personalInstructions = screen.getAllByText('Personal Instructions');
      const repositoryInstructions = screen.getAllByText('Repository Instructions');
      const organizationPolicies = screen.getAllByText('Organization Policies');
      
      // Should find at least one of each
      expect(personalInstructions.length).toBeGreaterThan(0);
      expect(repositoryInstructions.length).toBeGreaterThan(0);
      expect(organizationPolicies.length).toBeGreaterThan(0);
    });

    it('should render all layers active by default', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText(/Your specific preferences/)).toBeInTheDocument();
      expect(screen.getByText(/Project-specific rules/)).toBeInTheDocument();
      expect(screen.getByText(/Company-wide standards/)).toBeInTheDocument();
    });

    it('should not show the empty state message initially', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.queryByText(/No custom instructions active/)).not.toBeInTheDocument();
    });
  });

  describe('Layer Toggle Functionality', () => {
    it('should hide personal layer when toggled off', async () => {
      render(<PriorityVisualizer />);
      
      const personalButton = screen.getByRole('button', { name: /Personal Instructions/i });
      fireEvent.click(personalButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Your specific preferences/)).not.toBeInTheDocument();
      });
    });

    it('should hide repository layer when toggled off', async () => {
      render(<PriorityVisualizer />);
      
      const repoButton = screen.getByRole('button', { name: /Repository Instructions/i });
      fireEvent.click(repoButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Project-specific rules/)).not.toBeInTheDocument();
      });
    });

    it('should hide organization layer when toggled off', async () => {
      render(<PriorityVisualizer />);
      
      const orgButton = screen.getByRole('button', { name: /Organization Policies/i });
      fireEvent.click(orgButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Company-wide standards/)).not.toBeInTheDocument();
      });
    });

    it('should toggle layer back on when clicked again', async () => {
      render(<PriorityVisualizer />);
      
      const personalButton = screen.getByRole('button', { name: /Personal Instructions/i });
      
      // Toggle off
      fireEvent.click(personalButton);
      await waitFor(() => {
        expect(screen.queryByText(/Your specific preferences/)).not.toBeInTheDocument();
      });
      
      // Toggle back on
      fireEvent.click(personalButton);
      await waitFor(() => {
        expect(screen.getByText(/Your specific preferences/)).toBeInTheDocument();
      });
    });

    it('should allow toggling multiple layers independently', async () => {
      render(<PriorityVisualizer />);
      
      const personalButton = screen.getByRole('button', { name: /Personal Instructions/i });
      const orgButton = screen.getByRole('button', { name: /Organization Policies/i });
      
      // Toggle off personal and org
      fireEvent.click(personalButton);
      fireEvent.click(orgButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Your specific preferences/)).not.toBeInTheDocument();
        expect(screen.getByText(/Project-specific rules/)).toBeInTheDocument();
        expect(screen.queryByText(/Company-wide standards/)).not.toBeInTheDocument();
      });
    });
  });

  describe('Empty State', () => {
    it('should show empty state message when all layers are toggled off', () => {
      render(<PriorityVisualizer />);
      
      // Toggle off all layers
      const personalButton = screen.getByRole('button', { name: /Personal Instructions/i });
      const repoButton = screen.getByRole('button', { name: /Repository Instructions/i });
      const orgButton = screen.getByRole('button', { name: /Organization Policies/i });
      
      fireEvent.click(personalButton);
      fireEvent.click(repoButton);
      fireEvent.click(orgButton);
      
      expect(screen.getByText(/No custom instructions active/)).toBeInTheDocument();
      expect(screen.getByText(/Copilot uses default baseline/)).toBeInTheDocument();
    });

    it('should hide empty state when at least one layer is active', () => {
      render(<PriorityVisualizer />);
      
      // Toggle off all layers
      const personalButton = screen.getByRole('button', { name: /Personal Instructions/i });
      const repoButton = screen.getByRole('button', { name: /Repository Instructions/i });
      const orgButton = screen.getByRole('button', { name: /Organization Policies/i });
      
      fireEvent.click(personalButton);
      fireEvent.click(repoButton);
      fireEvent.click(orgButton);
      
      expect(screen.getByText(/No custom instructions active/)).toBeInTheDocument();
      
      // Toggle one back on
      fireEvent.click(personalButton);
      expect(screen.queryByText(/No custom instructions active/)).not.toBeInTheDocument();
    });
  });

  describe('Layer Descriptions', () => {
    it('should display correct description for personal layer', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText(/Your specific preferences/)).toBeInTheDocument();
      expect(screen.getByText(/Always use TypeScript/)).toBeInTheDocument();
    });

    it('should display correct description for repository layer', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText(/Project-specific rules/)).toBeInTheDocument();
      expect(screen.getByText(/Use these testing patterns/)).toBeInTheDocument();
    });

    it('should display correct description for organization layer', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText(/Company-wide standards/)).toBeInTheDocument();
      expect(screen.getByText(/No hardcoded secrets/)).toBeInTheDocument();
    });
  });

  describe('Visual Elements', () => {
    it('should render the Layers icon', () => {
      const { container } = render(<PriorityVisualizer />);
      
      // Check for SVG elements (icons)
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThan(0);
    });

    it('should render layer icons for each layer type', () => {
      const { container } = render(<PriorityVisualizer />);
      
      // Should have multiple icons (User, Book, Building, etc.)
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThanOrEqual(3);
    });

    it('should have the correct header text', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText('Available Context Layers')).toBeInTheDocument();
    });

    it('should render the final context prompt indicator', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByText('Final Context Prompt')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render all layer controls as buttons', () => {
      render(<PriorityVisualizer />);
      
      const buttons = screen.getAllByRole('button');
      // Should have at least 3 buttons for the layers
      expect(buttons.length).toBeGreaterThanOrEqual(3);
    });

    it('should have accessible button text', () => {
      render(<PriorityVisualizer />);
      
      expect(screen.getByRole('button', { name: /Personal Instructions/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Repository Instructions/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Organization Policies/i })).toBeInTheDocument();
    });
  });
});
