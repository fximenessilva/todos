import React from 'react';

interface NoLengthProps {
  message: string;
}

const NoLength: React.FC<NoLengthProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default NoLength;
