import React from "react";

export interface SlideProps {
  isActive: boolean;
}

export interface SlideDefinition {
  id: number;
  component: React.FC<SlideProps>;
  note?: string;
}