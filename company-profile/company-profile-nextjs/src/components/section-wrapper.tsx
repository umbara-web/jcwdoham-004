import React from 'react';

type SectionWrapprProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

const SectionWrapper: React.FC<SectionWrapprProps> = ({
  children,
  className = '',
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`relative mx-auto flex max-w-6xl flex-col px-6 lg:block py-6 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
