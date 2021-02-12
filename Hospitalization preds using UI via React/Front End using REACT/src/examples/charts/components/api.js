export const getStats = async () => {
  const res = await fetch("https://api.npoint.io/81566954678d8e4b613a");
  const data = await res.json();

  return data;
};

export const getLineChartData = async () => {
  const res = await fetch("https://api.npoint.io/15bd07b0bae10a386799");
  const data = await res.json();

  return data;
};

export const getAreaChartData = async () => {
  const res = await fetch("http://127.0.0.1:5000/stats/");
  const data = await res.json();

  return data["data"]['hosp_gender_stats'];
};

export const getBarChartData = async () => {
  const res = await fetch("http://127.0.0.1:5000/stats/");
  const data = await res.json();

  return data["data"]['age_stats'];
};

export const getPieChartData = async () => {
  const res = await fetch('http://127.0.0.1:5000/stats/');
  const data = await res.json();

  return data["data"]['gender_stats'];
};

export const getBarChartData_ethnicity = async () => {
  const res = await fetch("http://127.0.0.1:5000/stats/");
  const data = await res.json();

  return data["data"]['eth_stats'];
};

export const getBarChartData3 = async () => {
  const res = await fetch("http://127.0.0.1:5000/stats/");
  const data = await res.json();

  return data["data"]['hosp_stats'];
};

export const getBarChartData4 = async () => {
  const res = await fetch("http://127.0.0.1:5000/stats/");
  const data = await res.json();

  return data["data"]['ins_stats'];
};
export const getBarChartData5 = async () => {
  const res = await fetch("http://127.0.0.1:5000/stats/");
  const data = await res.json();

  return data["data"]['rel_stats'];
};