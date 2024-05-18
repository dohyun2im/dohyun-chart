import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

interface Props extends ButtonProps {
  isActivePath?: boolean;
}

const LinkButton: React.FC<Props> = ({ isActivePath, href, endIcon, children, ...props }) => {
  return (
    <Button
      {...props}
      href={href}
      endIcon={endIcon}
      LinkComponent={Link}
      color="inherit"
      sx={{
        textDecoration: isActivePath ? "underline" : undefined,
        "&:hover": { textDecoration: isActivePath ? "underline" : undefined }
      }}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
