import React from 'react';

interface FieldComps {
  [key: string]: React.Component
}

export const fieldComps: FieldComps = {};

export const registerField = (type: string, comp: React.Component) => {
  if ( comp ) fieldComps[type] = comp;
}