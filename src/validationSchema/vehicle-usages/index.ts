import * as yup from 'yup';

export const vehicleUsageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  hours_used: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
