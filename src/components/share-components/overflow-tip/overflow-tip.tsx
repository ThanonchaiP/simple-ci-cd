import {
  Tooltip,
  Typography,
  TypographyProps,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type OverflowTipProps = {
  text: string;
  typographyProps: TypographyProps;
};

export const OverflowTip = ({
  text,
  typographyProps,
}: OverflowTipProps) => {
  const textElementRef = useRef<HTMLDivElement>(null);
  const [hoverStatus, setHover] = useState(false);

  const compareSize = () => {
    if (!textElementRef.current) return;

    const isShow =
      textElementRef.current.scrollWidth >
        textElementRef.current.clientWidth ||
      textElementRef.current.scrollHeight >
        textElementRef.current.clientHeight;

    setHover(isShow);
  };

  useEffect(() => {
    compareSize();
    window.addEventListener('resize', compareSize);

    return () =>
      window.removeEventListener('resize', compareSize);
  }, []);

  return (
    <Tooltip
      title={text}
      disableHoverListener={!hoverStatus}
    >
      <Typography
        ref={textElementRef}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        {...typographyProps}
      >
        {text}
      </Typography>
    </Tooltip>
  );
};
