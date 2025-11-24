import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PriorityVisualizerEn from './PriorityVisualizer_en';

describe('PriorityVisualizerEn', () => {
  describe('Initial Rendering', () => {
    it('should render the component title', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText('Context Priority Stack')).toBeInTheDocument();
    });

    it('should render the subtitle', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText('Toggle layers to see how Copilot builds context')).toBeInTheDocument();
    });

    it('should render all three layer buttons', () => {
      render(<PriorityVisualizerEn />);
      
      // Use getAllByText to handle multiple instances
      const personalInstructions = screen.getAllByText('Personal Instructions');
      const repositoryInstructions = screen.getAllByText('Repository Instructions');
      const organizationPolicies = screen.getAllByText('Organization Policies');
      
      // Should find at least one of each
      expect(personalInstructions.length).toBeGreaterThan(0);
      expect(repositoryInstructions.length).toBeGreaterThan(0);
      expect(organizationPolicies.length).toBeGreaterThan(0);
    });

    it('should render all layers active by default', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText(/Your specific preferences/)).toBeInTheDocument();
      expect(screen.getByText(/Project-specific rules/)).toBeInTheDocument();
      expect(screen.getByText(/Company-wide standards/)).toBeInTheDocument();
    });
  });

  describe('Layer Toggle Functionality', () => {
    it('should hide personal layer when toggled off', async () => {
      render(<PriorityVisualizerEn />);
      
      const personalButton = screen.getByRole('button', { name: /Personal Instructions/i });
      fireEvent.click(personalButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Your specific preferences/)).not.toBeInTheDocument();
      });
    });

    it('should hide repository layer when toggled off', async () => {
      render(<PriorityVisualizerEn />);
      
      const repoButton = screen.getByRole('button', { name: /Repository Instructions/i });
      fireEvent.click(repoButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Project-specific rules/)).not.toBeInTheDocument();
      });
    });

    it('should hide organization layer when toggled off', async () => {
      render(<PriorityVisualizerEn />);
      
      const orgButton = screen.getByRole('button', { name: /Organization Policies/i });
      fireEvent.click(orgButton);
      
      await waitFor(() => {
        expect(screen.queryByText(/Company-wide standards/)).not.toBeInTheDocument();
      });
    });

    it('should toggle layer back on when clicked again', async () => {
      render(<PriorityVisualizerEn />);
      
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
  });

  describe('Empty State', () => {
    it('should show empty state message when all layers are toggled off', () => {
      render(<PriorityVisualizerEn />);
      
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
  });

  describe('Layer Descriptions (English)', () => {
    it('should display correct description for personal layer', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText(/Your specific preferences/)).toBeInTheDocument();
      expect(screen.getByText(/Always use TypeScript/)).toBeInTheDocument();
    });

    it('should display correct description for repository layer', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText(/Project-specific rules/)).toBeInTheDocument();
      expect(screen.getByText(/Use these testing patterns/)).toBeInTheDocument();
    });

    it('should display correct description for organization layer', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText(/Company-wide standards/)).toBeInTheDocument();
      expect(screen.getByText(/No hardcoded secrets/)).toBeInTheDocument();
    });
  });

  describe('Visual Elements', () => {
    it('should render the Layers icon', () => {
      const { container } = render(<PriorityVisualizerEn />);
      
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThan(0);
    });

    it('should have the correct header text', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText('Available Context Layers')).toBeInTheDocument();
    });

    it('should render the final context prompt indicator', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByText('Final Context Prompt')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render all layer controls as buttons', () => {
      render(<PriorityVisualizerEn />);
      
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(3);
    });

    it('should have accessible button text', () => {
      render(<PriorityVisualizerEn />);
      
      expect(screen.getByRole('button', { name: /Personal Instructions/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Repository Instructions/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Organization Policies/i })).toBeInTheDocument();
    });
  });
});
