import React, { useState, useRef } from 'react';

interface Person {
  fname: string;
  lname: string;
}

interface Props {
  text: string;
  ok: boolean;
  person: Person;
  i?: number;
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<number | null>(5);
  setCount(null);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
