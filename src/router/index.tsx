import { Login } from '@/views/environments/views/auth/page';
import { Events } from '@/views/environments/views/events/page';
import { Reservations } from '@/views/environments/views/reservations/page';
import { Settings } from '@/views/environments/views/settings/page';
import { UpdatePassword } from '@/views/environments/views/settings/update-password';
import { Website } from '@/views/environments/website/page';
import { Page } from '@/views/layouts/page';
import { ProfileLayout } from '@/views/layouts/profile';
import { Navigate, Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/website" element={<Website />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Page />}>
        <Route index element={<Events />} />
        <Route path="reunioes" element={<Events />} />
        <Route path="reservas" element={<Reservations />} />

        <Route path="/configuracoes" element={<ProfileLayout />}>
          <Route index element={<Navigate to="perfil" replace />} />
          <Route path="perfil" element={<Settings />} />
          <Route path="seguranca" element={<UpdatePassword />} />
        </Route>
      </Route>
    </Routes>
  );
}
