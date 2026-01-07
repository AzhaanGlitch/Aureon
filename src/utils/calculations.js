export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return (value / total) * 100;
};

export const calculateRemaining = (total, spent) => {
  return Math.max(total - spent, 0);
};

export const calculateDailyBudget = (monthlyBudget, daysInMonth) => {
  return monthlyBudget / daysInMonth;
};

export const projectMonthlySpending = (currentSpending, daysElapsed, daysInMonth) => {
  const dailyAverage = currentSpending / daysElapsed;
  return dailyAverage * daysInMonth;
};

export const calculateGoalProgress = (current, target) => {
  if (target === 0) return 0;
  return Math.min((current / target) * 100, 100);
};

export const calculateMonthlyTargetForGoal = (remaining, monthsLeft) => {
  if (monthsLeft === 0) return remaining;
  return remaining / monthsLeft;
};

export const calculateNetWorth = (assets, liabilities) => {
  return assets - liabilities;
};