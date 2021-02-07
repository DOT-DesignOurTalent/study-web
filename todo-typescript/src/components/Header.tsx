import React from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "할 일 목록" }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
