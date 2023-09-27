import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { Note } from '../../types';

type LayoutProps = {
  notes: Note[];
};

const Layout = ({ notes }: LayoutProps) => {
  // url den idyi al
  const { id } = useParams();

  // note 'u bul
  const found = notes.find((n) => n.id == id);

  if (found) {
    return <Outlet context={found} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

// çocuk route'ların kulannabileceğin
// context olarak tanımladığımız verilere erişmi saplayan fonk
export function useNote() {
  return useOutletContext<Note>();
}

export default Layout;
