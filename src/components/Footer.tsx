import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";
import Logo from "./ui/logo";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card py-6">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <Logo />

          {/* Developer Credit */}
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              Made with <Heart className="h-3 w-3 fill-accent text-accent" /> by
            </p>
            <a
              href="https://unseenumair.github.io/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm font-medium text-accent hover:underline"
              aria-label="Portfolio"
            >
              Umair Shakoor
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/unseenumair/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/unseenumair/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
