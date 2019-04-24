const data = [
    'eat',
    'love',
    'pray'
  ];
  
export const formattedData = data.map((item, i) => ({ key: i.toString(), text: item }));
