import React from 'react';

type Admin = {
  email: string;
  password: string;
};

type ContextValue = {
  admins?: Admin[];
  // eslint-disable-next-line no-unused-vars
  setAdmins: (admins: Admin[]) => void;
};

export const AdminContext = React.createContext<ContextValue>({
  setAdmins: () => {}
});

function AdminProvider({ children }: React.PropsWithChildren) {
  const [admins, setAdmins] = React.useState<Admin[]>();

  const handleState = React.useMemo(
    () => ({
      admins,
      setAdmins
    }),
    [admins]
  );

  return (
    <AdminContext.Provider value={handleState}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
