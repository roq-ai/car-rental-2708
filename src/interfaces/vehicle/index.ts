import { PerformanceInterface } from 'interfaces/performance';
import { ReservationInterface } from 'interfaces/reservation';
import { VehicleUsageInterface } from 'interfaces/vehicle-usage';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  performance?: PerformanceInterface[];
  reservation?: ReservationInterface[];
  vehicle_usage?: VehicleUsageInterface[];
  user?: UserInterface;
  _count?: {
    performance?: number;
    reservation?: number;
    vehicle_usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  user_id?: string;
}
