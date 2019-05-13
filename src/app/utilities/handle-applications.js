export const fetchApplications = async () => {
  const response = await fetch("../../assets/apps.json");
  if (response.ok) {
    return await response.json();
  }
}

export const loadApp = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.setAttribute('src', src);

    script.onload = () => {
      resolve();
      script.remove();
    }
    
    script.onerror = () => {
      reject();
      script.remove();
    }
    
    document.documentElement.appendChild(script);
  });
}
