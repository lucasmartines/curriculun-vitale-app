import formatString from "format-string-by-pattern";


export const formatTelephone = anyString => {
    const onlyNumbers = anyString.replace(/[^\d]/g, '');
   
    return formatString('(99)9999-9999', onlyNumbers);
  };

  export const formatCel = anyString => {
    const onlyNumbers = anyString.replace(/[^\d]/g, '');
   
    return formatString('(99)99999-9999', onlyNumbers);
  };