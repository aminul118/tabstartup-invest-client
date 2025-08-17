"use client";

import { useEffect, useId, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const id = useId();
  const { resolvedTheme, setTheme } = useTheme();

  // Prevent SSR/CSR mismatch by only reading theme after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // When mounted, reflect current theme in the switch
  const checked = mounted ? resolvedTheme === "light" : false;

  const handleChange = (next: boolean) => {
    setTheme(next ? "light" : "dark");
  };

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={handleChange}
        aria-label="Toggle theme"
      />
      <Label htmlFor={id} className="inline-flex items-center gap-1">
        <span className="sr-only">Toggle theme</span>
        {checked ? (
          <SunIcon size={16} aria-hidden="true" />
        ) : (
          <MoonIcon size={16} aria-hidden="true" />
        )}
      </Label>
    </div>
  );
}
