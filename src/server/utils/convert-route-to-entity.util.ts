const mapping: Record<string, string> = {
  organizations: 'organization',
  performances: 'performance',
  reservations: 'reservation',
  users: 'user',
  vehicles: 'vehicle',
  'vehicle-usages': 'vehicle_usage',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
