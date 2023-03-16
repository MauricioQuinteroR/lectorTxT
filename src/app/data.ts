validationRules = [
  {
    column: 1,
    name: 'Numero de radicado anterior',

    maxLength: 10,

    required: false,
    type: 'numeric',
  },
  {
    column: 2,
    name: 'RG\nRespuesta a Glosa',
    values: ['0', '1', ''],
    maxLength: 1,

    required: false,
    type: 'string',
  },
  {
    column: 3,
    name: 'Numero de factura o cuenta de cobro',

    maxLength: 20,

    required: true,
    type: 'string',
  },
  {
    column: 4,
    name: 'Numero consecutivo de la reclamacion',

    maxLength: 12,

    required: true,
    type: 'numeric',
  },
  {
    column: 5,
    name: 'Codigo de habilitacion del prestador de servicios de salud',

    maxLength: 12,

    required: true,
    type: 'numeric',
  },
  {
    column: 6,
    name: 'Primer apellido de la victima',

    maxLength: 20,

    required: true,
    type: 'string',
  },
  {
    column: 7,
    name: 'Segundo apellido de la victima',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 8,
    name: 'Primer nombre de la victima',

    maxLength: 20,

    required: true,
    type: 'string',
  },
  {
    column: 9,
    name: 'Segundo nombre de la victima',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 10,
    name: 'Tipo de documento de identidad de la\nvictima',
    values: ['CC', 'CE', 'PA', 'TI', 'RC', 'AS', 'MS', 'CD'],
    maxLength: 2,

    required: true,
    type: 'string',
  },
  {
    column: 11,
    name: 'Numero de documento de identidad de la victima',

    maxLength: 16,

    required: true,
    type: 'string',
  },
  {
    column: 12,
    name: 'Fecha de nacimiento de la victima',

    maxLength: 10,

    required: false,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 13,
    name: 'Sexo de la victima',
    values: ['F', 'M'],
    maxLength: 1,

    required: true,
    type: 'string',
  },
  {
    column: 14,
    name: 'Direccion de residencia de la victima',

    maxLength: 40,

    required: false,
    type: 'string',
  },
  {
    column: 15,
    name: 'Codigo del departamento de residencia de la victima',

    maxLength: 2,

    required: true,
    type: 'numeric',
  },
  {
    column: 16,
    name: 'Codigo del municipio de  residencia de la victima',

    maxLength: 3,

    required: true,
    type: 'numeric',
  },
  {
    column: 17,
    name: 'Telefono de la victima',

    maxLength: 10,

    required: false,
    type: 'numeric',
  },
  {
    column: 18,
    name: 'Condicion de la victima',
    values: ['1', '2', '3', '4'],
    maxLength: 1,

    required: true,
    type: 'numeric',
  },
  {
    column: 19,
    name: 'Naturaleza del evento',
    values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '25', '26', '27'],
    maxLength: 2,

    required: true,
    type: 'numeric',
  },
  {
    column: 20,
    name: 'Descripcion del otro evento',

    maxLength: 25,

    required: false,
    type: 'string',
  },
  {
    column: 21,
    name: 'Direccion de ocurrencia del evento',

    maxLength: 40,

    required: true,
    type: 'string',
  },
  {
    column: 22,
    name: 'Fecha de\nocurrencia del\nevento',

    maxLength: 10,

    required: true,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 23,
    name: 'Hora de ocurrencia del evento Formato HH:MM (24 horas)',

    maxLength: 5,

    required: true,
    type: 'numeric',
    format: 'HH:MM',
  },
  {
    column: 24,
    name: 'Codigo del departamento de ocurrencia del evento',

    maxLength: 2,

    required: true,
    type: 'numeric',
  },
  {
    column: 25,
    name: 'Codigo del municipio de ocurrencia del evento',

    maxLength: 3,

    required: true,
    type: 'numeric',
  },
  {
    column: 26,
    name: 'Zona de ocurrencia del evento',
    values: ['U', 'R'],
    maxLength: 1,

    required: true,
    type: 'string',
  },
  {
    column: 27,
    name: 'Estado de aseguramiento',
    values: ['1', '2', '3', '4', '5'],
    maxLength: 1,

    required: true,
    type: 'numeric',
  },
  {
    column: 28,
    name: 'Marca',

    maxLength: 15,

    required: true,
    type: 'string',
  },
  {
    column: 29,
    name: 'Placa',

    maxLength: 6,

    required: true,
    type: 'string',
  },
  {
    column: 30,
    name: 'Tipo de Vehiculo',
    values: ['3', '4', '5', '6', '7', '8', '9'],
    maxLength: 1,

    required: true,
    type: 'numeric',
  },
  {
    column: 31,
    name: 'Codigo de la aseguradora',

    maxLength: 6,

    required: true,
    type: 'string',
  },
  {
    column: 32,
    name: 'Numero de poliza SOAT',

    maxLength: 20,

    required: true,
    type: '',
  },
  {
    column: 33,
    name: 'Date de inicio de vigencia de la poliza',

    maxLength: 10,

    required: true,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 34,
    name: 'Date final de vigencia de la poliza',

    maxLength: 10,

    required: true,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 35,
    name: 'Intervencion de la autoridad',
    values: ['0', '1'],
    maxLength: 1,

    required: false,
    type: 'numeric',
  },
  {
    column: 36,
    name: 'Cobro por excedente de la poliza',
    values: ['0', '1'],
    maxLength: 1,

    required: false,
    type: 'numeric',
  },
  {
    column: 37,
    name: 'Placa del segundo vehiculo involucrado',

    maxLength: 6,

    required: false,
    type: 'string',
  },
  {
    column: 38,
    name: 'Tipo de documento de identidad del\npropietario del segundo vehiculo involucrado',
    values: ['CC', 'CE', 'PA', 'TI', 'RC', 'NI', 'CD'],
    maxLength: 2,

    required: false,
    type: 'string',
  },
  {
    column: 39,
    name: 'Numero de documento de\nidentidad del propietario del segundo vehiculo involucrado',

    maxLength: 16,

    required: false,
    type: 'numeric',
  },
  {
    column: 40,
    name: 'Placa del tercer vehiculo involucrado',

    maxLength: 6,

    required: false,
    type: 'string',
  },
  {
    column: 41,
    name: 'Tipo de documento de identidad del\npropietario del tercer vehiculo involucrado',
    values: ['CC', 'CE', 'PA', 'TI', 'RC', 'NI', 'CD'],
    maxLength: 2,

    required: false,
    type: 'string',
  },
  {
    column: 42,
    name: 'Numero de documento de identidad del propietario del tercer vehiculo involucrado',

    maxLength: 16,

    required: false,
    type: 'numeric',
  },
  {
    column: 43,
    name: 'Tipo de documento de identidad del propietario',
    values: ['CC', 'CE', 'PA', 'TI', 'RC', 'NI', 'CD'],
    maxLength: 2,

    required: true,
    type: 'string',
  },
  {
    column: 44,
    name: 'Numero de documento de identidad del propietario',

    maxLength: 16,

    required: true,
    type: 'numeric',
  },
  {
    column: 45,
    name: 'Primer apellido del propietario o razon social en caso de empresa.',

    maxLength: 40,

    required: true,
    type: 'string',
  },
  {
    column: 46,
    name: 'Segundo apellido del propietario',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 47,
    name: 'Primer nombre del propietario',

    maxLength: 20,

    required: true,
    type: 'string',
  },
  {
    column: 48,
    name: 'Segundo nombre del propietario',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 49,
    name: 'Direccion de residencia del propietario',

    maxLength: 40,

    required: true,
    type: 'string',
  },
  {
    column: 50,
    name: 'Telefono de residencia del propietario',

    maxLength: 10,

    required: true,
    type: 'numeric',
  },
  {
    column: 51,
    name: 'Codigo del departamento de residencia del propietario',

    maxLength: 2,

    required: true,
    type: 'numeric',
  },
  {
    column: 52,
    name: 'Codigo del municipio de residencia del propietario',

    maxLength: 3,

    required: true,
    type: 'numeric',
  },
  {
    column: 53,
    name: 'Primer apellido del conductor',

    maxLength: 20,

    required: true,
    type: 'string',
  },
  {
    column: 54,
    name: 'Segundo apellido del conductor',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 55,
    name: 'Primer nombre del conductor',

    maxLength: 20,

    required: true,
    type: 'string',
  },
  {
    column: 56,
    name: 'Segundo nombre del conductor',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 57,
    name: 'Tipo de documento de identidad del\nconductor',
    values: ['RC', 'CC', 'CE', 'PA', 'TI', 'AS', 'CD'],
    maxLength: 2,

    required: true,
    type: 'string',
  },
  {
    column: 58,
    name: 'Numero de documento de identidad del conductor',

    maxLength: 16,

    required: true,
    type: 'string',
  },
  {
    column: 59,
    name: 'Direccion de residencia del conductor',

    maxLength: 40,

    required: true,
    type: 'string',
  },
  {
    column: 60,
    name: 'Codigo del departamento de residencia del conductor',

    maxLength: 2,

    required: true,
    type: 'numeric',
  },
  {
    column: 61,
    name: 'Codigo del municipio de residencia del conductor',

    maxLength: 3,

    required: true,
    type: 'numeric',
  },
  {
    column: 62,
    name: 'Telefono de residencia del conductor',

    maxLength: 10,

    required: true,
    type: 'numeric',
  },
  {
    column: 63,
    name: 'Tipo de referencia',
    values: ['1', '2'],
    maxLength: 1,

    required: false,
    type: 'numeric',
  },
  {
    column: 64,
    name: 'Fecha de remision',

    maxLength: 10,

    required: false,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 65,
    name: 'Hora de salida HH:MM (24 horas)',

    maxLength: 5,

    required: false,
    type: 'numeric',
    format: 'HH:MM',
  },
  {
    column: 66,
    name: 'Codigo de habilitacion del prestador de servicios de salud',

    maxLength: 12,

    required: false,
    type: 'numeric',
  },
  {
    column: 67,
    name: 'Profesional que\nremite',

    maxLength: 60,

    required: false,
    type: 'string',
  },
  {
    column: 68,
    name: 'Cargo de la persona que remite',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 69,
    name: 'Fecha de ingreso',

    maxLength: 10,

    required: false,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 70,
    name: 'Hora de ingreso HH:MM (24 horas)',

    maxLength: 5,

    required: false,
    type: 'numeric',
    format: 'HH:MM',
  },
  {
    column: 71,
    name: 'Codigo de habilitacion del prestador de servicios de salud.',

    maxLength: 12,

    required: false,
    type: 'numeric',
  },
  {
    column: 72,
    name: 'Profesional que recibe',

    maxLength: 60,

    required: false,
    type: 'string',
  },
  {
    column: 73,
    name: 'Cargo de la persona que recibe',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 74,
    name: 'Placa',

    maxLength: 6,

    required: false,
    type: 'string',
  },
  {
    column: 75,
    name: 'Transporte de la victima desde el sitio del evento',

    maxLength: 40,

    required: false,
    type: 'string',
  },
  {
    column: 76,
    name: 'Transporte de la victima hasta el fin del recorrido',

    maxLength: 40,

    required: false,
    type: 'string',
  },
  {
    column: 77,
    name: 'Tipo de servicio de la ambulancia',
    values: ['1', '2'],
    maxLength: 1,

    required: false,
    type: 'numeric',
  },
  {
    column: 78,
    name: 'Zona donde recoge victima',
    values: ['U', 'R'],
    maxLength: 1,

    required: false,
    type: 'string',
  },
  {
    column: 79,
    name: 'Fecha de ingreso',

    maxLength: 10,

    required: false,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 80,
    name: 'Hora de ingreso HH:MM (24 horas)',

    maxLength: 5,

    required: false,
    type: 'numeric',
    format: 'HH:MM',
  },
  {
    column: 81,
    name: 'Fecha de egreso',

    maxLength: 10,

    required: false,
    type: 'Date',
    format: 'DD/MM/AAAA',
  },
  {
    column: 82,
    name: 'Hora de egreso HH:MM (24 horas)',

    maxLength: 5,

    required: false,
    type: 'numeric',
    format: 'HH:MM',
  },
  {
    column: 83,
    name: 'Codigo de diagnostico principal de ingreso',

    maxLength: 4,

    required: false,
    type: 'string',
  },
  {
    column: 84,
    name: 'Codigo de diagnostico de ingreso asociado 1',

    maxLength: 4,

    required: false,
    type: 'string',
  },
  {
    column: 85,
    name: 'Codigo de diagnostico de ingreso asociado 2',

    maxLength: 4,

    required: false,
    type: 'string',
  },
  {
    column: 86,
    name: 'Codigo diagnostico principal de egreso',

    maxLength: 4,

    required: false,
    type: 'string',
  },
  {
    column: 87,
    name: 'Codigo de diagnostico de egreso asociado 1',

    maxLength: 4,

    required: false,
    type: 'string',
  },
  {
    column: 88,
    name: 'Codigo de diagnostico de egreso asociado 2',

    maxLength: 4,

    required: false,
    type: 'string',
  },
  {
    column: 89,
    name: 'Primer apellido del medico o profesional de la salud',

    maxLength: 20,

    required: false,
    type: 'string',
  },
  {
    column: 90,
    name: 'Segundo apellido del medico o profesional de la salud',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 91,
    name: 'Primer nombre del medico o profesional de la salud',

    maxLength: 20,

    required: false,
    type: 'string',
  },
  {
    column: 92,
    name: 'Segundo nombre del medico o profesional de la salud',

    maxLength: 30,

    required: false,
    type: 'string',
  },
  {
    column: 93,
    name: 'Tipo de documento de identidad del medico o profesional de la salud',
    values: ['CC', 'CE', 'PA'],
    maxLength: 2,

    required: false,
    type: 'string',
  },
  {
    column: 94,
    name: 'Numero de documento de identidad del medico o profesional de la salud',

    maxLength: 16,

    required: false,
    type: 'numeric',
  },
  {
    column: 95,
    name: 'Numero de registro del medico',

    maxLength: 16,

    required: false,
    type: 'numeric',
  },
  {
    column: 96,
    name: 'Total facturado por amparo de gastos \nmedicos quirurgicos',

    maxLength: 5,
    min: 0,
    required: false,
    type: 'numeric',
  },
  {
    column: 97,
    name: 'Total reclamado por amparo de gastos medicos quirurgicos',

    maxLength: 5,
    min: 0,
    required: false,
    type: 'numeric',
  },
  {
    column: 98,
    name: 'Total facturado por amparo de gastos\nde transporte y movilizacion de la\nvictima',

    maxLength: 5,
    min: 0,
    required: false,
    type: 'numeric',
  },
  {
    column: 99,
    name: 'Total reclamado por amparo de\ngastos de transporte y movilizacion de la victima',

    maxLength: 5,
    min: 0,
    required: false,
    type: 'numeric',
  },
  {
    column: 100,
    name: 'Total Folios',

    maxLength: 3,

    required: false,
    type: 'numeric',
  },
];





  // validationRules = [
  //   { maxLength: 10, required: false, type: 'numeric' },
  //   { values: ['0', '1', ''], maxLength: 1, required: false, type: 'text' },
  //   { maxLength: 20, required: true, type: 'alphanumeric' },
  //   { maxLength: 12, required: true, type: 'numeric' },
  //   { maxLength: 12, required: true, type: 'numeric' },
  //   { maxLength: 20, required: true, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 20, required: true, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { values: ['CC', 'CE', 'PA', 'TI', 'RC', 'AS', 'MS', 'CD'], maxLength: 2, required: true, type: 'text' },
  //   { maxLength: 16, required: true, type: 'alphanumeric' },
  //   { maxLength: 10, required: false, type: 'date', format: 'DD/MM/YYYY' },
  //   { values: ['F', 'M'], maxLength: 1, required: true, type: 'text' },
  //   { maxLength: 40, required: false, type: 'text' },
  //   { maxLength: 2, required: true, type: 'numeric' },
  //   { maxLength: 3, required: true, type: 'numeric' },
  //   { maxLength: 10, required: false, type: 'numeric' },
  //   { values: ['1', '2', '3', '4'], maxLength: 1, required: true, type: 'numeric' },
  //   { values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '25', '26', '27'], maxLength: 2, required: true, type: 'numeric' },
  //   { maxLength: 25, required: false, type: 'text' },
  //   { maxLength: 40, required: true, type: 'text' },
  //   { maxLength: 10, required: true, type: 'date', format: 'DD/MM/YYYY' },
  //   { maxLength: 5, required: true, type: 'numeric', format: 'HH:MM' },
  //   { maxLength: 2, required: true, type: 'numeric', dane: true },
  //   { maxLength: 3, required: true, type: 'numeric', dane: true },
  //   { values: ['U', 'R'], maxLength: 1, required: true, type: 'text' },
  //   { values: ['1', '2', '3', '4', '5'], maxLength: 1, required: true, type: 'numeric' },
  //   { maxLength: 15, required: true, type: 'alphanumeric' },
  //   { maxLength: 6, required: true, type: 'alphanumeric' },
  //   { values: ['3', '4', '5', '6', '7', '8', '9'], maxLength: 1, required: true, type: 'numeric' },
  //   { maxLength: 6, required: true, type: 'alphanumeric' },
  //   { maxLength: 20, required: true, type: 'text' },
  //   { maxLength: 10, required: true, type: 'date', format: 'DD/MM/YYYY' },
  //   { values: ['0', '1'], maxLength: 1, required: false, type: 'numeric' },
  //   { values: ['0', '1'], maxLength: 1, required: false, type: 'numeric' },
  //   { maxLength: 6, required: false, type: 'alphanumeric' },
  //   { values: ['CC', 'CE', 'PA', 'TI', 'RC', 'NI', 'CD'], maxLength: 2, required: false, type: 'text' },
  //   { maxLength: 16, required: false, type: 'numeric' },
  //   { maxLength: 6, required: false, type: 'alphanumeric' },
  //   { values: ['CC', 'CE', 'PA', 'TI', 'RC', 'NI', 'CD'], maxLength: 2, required: false, type: 'text' },
  //   { maxLength: 16, required: false, type: 'numeric' },
  //   { values: ['CC', 'CE', 'PA', 'TI', 'RC', 'NI', 'CD'], maxLength: 2, required: true, type: 'text' },
  //   { maxLength: 16, required: true, type: 'numeric' },
  //   { maxLength: 40, required: true, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 20, required: true, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 40, required: true, type: 'text' },
  //   { maxLength: 10, required: true, type: 'numeric' },
  //   { maxLength: 2, required: true, type: 'numeric' },
  //   { maxLength: 3, required: true, type: 'numeric' },
  //   { maxLength: 20, required: true, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 20, required: true, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { values: ['RC', 'CC', 'CE', 'PA', 'TI', 'AS', 'CD'], maxLength: 2, required: true, type: 'text' },
  //   { maxLength: 16, required: true, type: 'alphanumeric' },
  //   { maxLength: 40, required: true, type: 'text' },
  //   { maxLength: 2, required: true, type: 'numeric' },
  //   { maxLength: 3, required: true, type: 'numeric' },
  //   { maxLength: 10, required: true, type: 'numeric' },
  //   { values: ['1', '2'], maxLength: 1, required: false, type: 'numeric' },
  //   { maxLength: 10, required: false, type: 'date', format: 'DD/MM/YYYY' },
  //   { maxLength: 5, required: false, type: 'numeric', format: 'HH:MM' },
  //   { maxLength: 12, required: false, type: 'numeric' },
  //   { maxLength: 60, required: false, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 10, required: false, type: 'date', format: 'DD/MM/YYYY' },
  //   { maxLength: 5, required: false, type: 'numeric', format: 'HH:MM' },
  //   { maxLength: 12, required: false, type: 'numeric' },
  //   { maxLength: 60, required: false, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 6, required: false, type: 'alphanumeric' },
  //   { maxLength: 40, required: false, type: 'text' },
  //   { maxLength: 40, required: false, type: 'text' },
  //   { values: ['1', '2'], maxLength: 1, required: false, type: 'numeric' },
  //   { values: ['U', 'R'], maxLength: 1, required: false, type: 'text' },
  //   { maxLength: 10, required: false, type: 'date', format: 'DD/MM/YYYY' },
  //   { maxLength: 5, required: false, type: 'numeric', format: 'HH:MM' },
  //   { maxLength: 10, required: false, type: 'date', format: 'DD/MM/YYYY' },
  //   { maxLength: 5, required: false, type: 'numeric', format: 'HH:MM' },
  //   { maxLength: 4, required: false, type: 'alphanumeric' },
  //   { maxLength: 4, required: false, type: 'alphanumeric' },
  //   { maxLength: 4, required: false, type: 'alphanumeric' },
  //   { maxLength: 4, required: false, type: 'alphanumeric' },
  //   { maxLength: 4, required: false, type: 'alphanumeric' },
  //   { maxLength: 4, required: false, type: 'alphanumeric' },
  //   { maxLength: 20, required: false, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { maxLength: 20, required: false, type: 'text' },
  //   { maxLength: 30, required: false, type: 'text' },
  //   { values: ['CC', 'CE', 'PA'], maxLength: 2, required: false, type: 'text' },
  //   { maxLength: 16, required: false, type: 'numeric' },
  //   { maxLength: 16, required: false, type: 'numeric' },
  //   { maxLength: 5, required: false, type: 'numeric', min: 0 },
  //   { maxLength: 5, required: false, type: 'numeric', min: 0 },
  //   { maxLength: 5, required: false, type: 'numeric', min: 0 },
  //   { maxLength: 5, required: false, type: 'numeric', min: 0 },
  //   { maxLength: 10, required: true, type: 'date', format: 'DD/MM/YYYY' },
  //   { maxLength: 3, required: false, type: 'numeric' }
  // ];
