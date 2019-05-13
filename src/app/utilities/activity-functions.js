const predicates = [(location) => location.pathname === '/'];

export const convertToActivityFunction = functionString => {
  const functionArray = functionString.split(' ');
  if (functionArray[0] === 'true') {
    return () => true;
  } else if (functionString.startsWith('location.pathname')) {
    const predicate = functionArray[1] === 'eq' ? location => location.pathname[functionArray[2]](functionArray[3]) : location => !location.pathname[functionArray[2]](functionArray[3]);
    predicates.push(predicate);
    return predicate;
  }
}

export const activityFunctionNotFound = () => {
  return location => predicates.every(func => !func(location));
}
