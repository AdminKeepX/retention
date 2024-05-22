import React from 'react';
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material';
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'hsla(220, 60%, 99%, 0.6)'
                : 'hsla(220, 0%, 0%, 0.7)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
                : '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
            }}
          >
            <Box sx={{ display: 'flex' }}>
            <Typography variant="h6" sx={{ color: "var(--tg-theme-button-color)" }}>Retention</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <TonConnectButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
