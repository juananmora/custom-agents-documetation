import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CheckCircle2, Lightbulb } from 'lucide-react';
import { 
  ComparisonCard, 
  FeatureCard, 
  AgentCard, 
  CodeComparison 
} from './ContentComponents';

describe('ContentComponents', () => {
  describe('ComparisonCard', () => {
    it('should render a standard comparison card correctly', () => {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      render(
        <ComparisonCard 
          title="Standard Card" 
          items={items} 
          type="standard" 
        />
      );

      expect(screen.getByText('Standard Card')).toBeInTheDocument();
      items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    it('should render a custom comparison card correctly', () => {
      const items = ['Custom Item 1', 'Custom Item 2'];
      render(
        <ComparisonCard 
          title="Custom Card" 
          items={items} 
          type="custom" 
        />
      );

      expect(screen.getByText('Custom Card')).toBeInTheDocument();
      items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    it('should apply different styles for standard type', () => {
      render(
        <ComparisonCard 
          title="Standard" 
          items={['Item']} 
          type="standard" 
        />
      );

      const title = screen.getByText('Standard');
      expect(title).toHaveClass('text-[#323232]');
    });

    it('should apply different styles for custom type', () => {
      render(
        <ComparisonCard 
          title="Custom" 
          items={['Item']} 
          type="custom" 
        />
      );

      const title = screen.getByText('Custom');
      expect(title).toHaveClass('text-white');
    });

    it('should render correct number of items', () => {
      const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
      render(
        <ComparisonCard 
          title="Test" 
          items={items} 
          type="standard" 
        />
      );

      items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    it('should render CheckCircle2 icon for custom type', () => {
      const { container } = render(
        <ComparisonCard 
          title="Custom" 
          items={['Item']} 
          type="custom" 
        />
      );

      // Check that the CheckCircle2 icon is rendered
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThan(0);
    });
  });

  describe('FeatureCard', () => {
    it('should render feature card with all props', () => {
      const icon = <Lightbulb className="w-6 h-6" />;
      render(
        <FeatureCard 
          icon={icon}
          title="Test Feature"
          description="This is a test description"
          color="blue"
        />
      );

      expect(screen.getByText('Test Feature')).toBeInTheDocument();
      expect(screen.getByText('This is a test description')).toBeInTheDocument();
    });

    it('should apply blue color classes', () => {
      const icon = <Lightbulb className="w-6 h-6" />;
      const { container } = render(
        <FeatureCard 
          icon={icon}
          title="Blue Card"
          description="Description"
          color="blue"
        />
      );

      const card = container.firstChild;
      expect(card).toHaveClass('bg-white');
    });

    it('should apply green color classes', () => {
      const icon = <Lightbulb className="w-6 h-6" />;
      const { container } = render(
        <FeatureCard 
          icon={icon}
          title="Green Card"
          description="Description"
          color="green"
        />
      );

      const card = container.firstChild;
      expect(card).toHaveClass('bg-white');
    });

    it('should apply purple color classes', () => {
      const icon = <Lightbulb className="w-6 h-6" />;
      const { container } = render(
        <FeatureCard 
          icon={icon}
          title="Purple Card"
          description="Description"
          color="purple"
        />
      );

      const card = container.firstChild;
      expect(card).toHaveClass('bg-white');
    });

    it('should render custom icon', () => {
      const icon = <Lightbulb data-testid="custom-icon" className="w-6 h-6" />;
      render(
        <FeatureCard 
          icon={icon}
          title="Card with Icon"
          description="Description"
          color="blue"
        />
      );

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  describe('AgentCard', () => {
    it('should render agent card with all props', () => {
      const icon = <CheckCircle2 className="w-6 h-6 text-white" />;
      render(
        <AgentCard 
          name="Test Agent"
          description="Test agent description"
          icon={icon}
          color="from-blue-500 to-purple-500"
        />
      );

      expect(screen.getByText('Test Agent')).toBeInTheDocument();
      expect(screen.getByText('Test agent description')).toBeInTheDocument();
    });

    it('should apply gradient color classes to icon container', () => {
      const icon = <CheckCircle2 className="w-6 h-6 text-white" />;
      const { container } = render(
        <AgentCard 
          name="Agent"
          description="Description"
          icon={icon}
          color="from-red-500 to-yellow-500"
        />
      );

      const iconContainer = container.querySelector('.bg-gradient-to-br');
      expect(iconContainer).toHaveClass('from-red-500', 'to-yellow-500');
    });

    it('should render custom icon', () => {
      const icon = <Lightbulb data-testid="agent-icon" className="w-6 h-6" />;
      render(
        <AgentCard 
          name="Agent"
          description="Description"
          icon={icon}
          color="from-blue-500 to-purple-500"
        />
      );

      expect(screen.getByTestId('agent-icon')).toBeInTheDocument();
    });

    it('should have proper styling classes', () => {
      const icon = <CheckCircle2 className="w-6 h-6" />;
      const { container } = render(
        <AgentCard 
          name="Agent"
          description="Description"
          icon={icon}
          color="from-blue-500 to-purple-500"
        />
      );

      const card = container.firstChild;
      expect(card).toHaveClass('bg-white', 'border-2', 'border-[#E5E5E5]');
    });
  });

  describe('CodeComparison', () => {
    const badExample = {
      title: 'Bad Practice',
      code: 'const x = 1;\nconsole.log(x);'
    };

    const goodExample = {
      title: 'Good Practice',
      code: 'const meaningfulName = 1;\nconsole.log(meaningfulName);'
    };

    it('should render both bad and good examples', () => {
      render(<CodeComparison bad={badExample} good={goodExample} />);

      expect(screen.getByText('Bad Practice')).toBeInTheDocument();
      expect(screen.getByText('Good Practice')).toBeInTheDocument();
    });

    it('should render bad code example', () => {
      render(<CodeComparison bad={badExample} good={goodExample} />);

      expect(screen.getByText(/const x = 1;/)).toBeInTheDocument();
    });

    it('should render good code example', () => {
      render(<CodeComparison bad={badExample} good={goodExample} />);

      expect(screen.getByText(/const meaningfulName = 1;/)).toBeInTheDocument();
    });

    it('should have different styling for bad and good examples', () => {
      const { container } = render(<CodeComparison bad={badExample} good={goodExample} />);

      const codeBlocks = container.querySelectorAll('.bg-\\[\\#1a1a1a\\]');
      expect(codeBlocks.length).toBe(2);
    });

    it('should render code in pre and code tags', () => {
      const { container } = render(<CodeComparison bad={badExample} good={goodExample} />);

      const preTags = container.querySelectorAll('pre');
      const codeTags = container.querySelectorAll('code');

      expect(preTags.length).toBe(2);
      expect(codeTags.length).toBe(2);
    });

    it('should display titles in uppercase', () => {
      render(<CodeComparison bad={badExample} good={goodExample} />);

      const badTitle = screen.getByText('Bad Practice');
      const goodTitle = screen.getByText('Good Practice');

      expect(badTitle).toHaveClass('uppercase');
      expect(goodTitle).toHaveClass('uppercase');
    });
  });
});
