import { Home } from './Home';
import { useSearchParams, Navigate } from 'react-router-dom';

export function Main() {
  const [searchParams] = useSearchParams();

  const vin = searchParams.get('vin');

  if (vin) return <Navigate to="/home" state={{ vin }} />;

  return <Home />;
}
