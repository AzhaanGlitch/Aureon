// src/data/dummyData.js

export const DUMMY_USER = {
  id: 1,
  name: 'Azhaan Ali Siddiqui',
  email: 'aureondev@email.com',
  netWorth: 10960,
  cashAvailable: 3460,
  invested: 8500,
  creditUsed: 340,
  creditLimit: 5000,
  savingsGoalProgress: 72,
  lastLogin: 'Yesterday 8:42 PM'
};

export const DUMMY_TRANSACTIONS = [
  {
    id: 1,
    date: '2026-01-05',
    merchant: 'Starbucks',
    amount: -6.50,
    category: 'Coffee & Cafes',
    categoryKey: 'dining',
    time: '8:15 AM',
    paymentMethod: 'Credit Card'
  },
  {
    id: 2,
    date: '2026-01-04',
    merchant: 'Shell Gas',
    amount: -42.00,
    category: 'Transportation',
    categoryKey: 'transportation',
    time: '5:30 PM',
    paymentMethod: 'Debit Card'
  },
  {
    id: 3,
    date: '2026-01-04',
    merchant: 'Target',
    amount: -67.80,
    category: 'Groceries',
    categoryKey: 'groceries',
    note: 'Weekly shopping',
    paymentMethod: 'Credit Card'
  },
  {
    id: 4,
    date: '2026-01-03',
    merchant: 'Freelance Payment',
    amount: 150.00,
    category: 'Income - Freelance',
    categoryKey: 'income',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 5,
    date: '2026-01-03',
    merchant: 'Netflix',
    amount: -15.99,
    category: 'Entertainment',
    categoryKey: 'entertainment',
    paymentMethod: 'Credit Card'
  }
];

export const DUMMY_BUDGET = {
  total: 2500,
  spent: 497.50,
  remaining: 2002.50,
  daysLeft: 26,
  dailyBudget: 77,
  categories: [
    {
      id: 1,
      name: 'Food & Dining',
      categoryKey: 'dining',
      budget: 400,
      spent: 197.50,
      remaining: 202.50,
      percentage: 49,
      transactions: 12,
      status: 'on-track',
      avgPerTransaction: 16.46,
      prediction: 380
    },
    {
      id: 2,
      name: 'Housing',
      categoryKey: 'housing',
      budget: 800,
      spent: 0,
      remaining: 800,
      percentage: 0,
      transactions: 0,
      status: 'pending',
      dueDate: 'Jan 15'
    },
    {
      id: 3,
      name: 'Transportation',
      categoryKey: 'transportation',
      budget: 200,
      spent: 127,
      remaining: 73,
      percentage: 64,
      transactions: 8,
      status: 'warning',
      breakdown: {
        gas: 85,
        parking: 20,
        uber: 22
      },
      warning: 'At current rate, you\'ll exceed by $45'
    },
    {
      id: 4,
      name: 'Groceries',
      categoryKey: 'groceries',
      budget: 300,
      spent: 120,
      remaining: 180,
      percentage: 40,
      transactions: 4,
      status: 'good',
      lastShop: '2 days ago'
    },
    {
      id: 5,
      name: 'Entertainment',
      categoryKey: 'entertainment',
      budget: 150,
      spent: 65,
      remaining: 85,
      percentage: 43,
      transactions: 5,
      status: 'on-track',
      subscriptions: 31.98
    },
    {
      id: 6,
      name: 'Miscellaneous',
      categoryKey: 'miscellaneous',
      budget: 250,
      spent: 30,
      remaining: 220,
      percentage: 12,
      transactions: 2,
      status: 'excellent'
    }
  ]
};

export const DUMMY_GOALS = [
  {
    id: 1,
    name: 'House Down Payment',
    current: 13450,
    target: 30000,
    remaining: 16550,
    deadline: 'Dec 31, 2026',
    timeLeft: '11 months',
    monthlyTarget: 750,
    currentPace: 520,
    status: 'behind',
    behindBy: 1200,
    priority: 'high',
    category: 'Long-term savings',
    createdDate: 'March 15, 2025'
  },
  {
    id: 2,
    name: 'Vacation Fund',
    current: 1560,
    target: 3000,
    remaining: 1440,
    deadline: 'July 15, 2026',
    timeLeft: '6 months',
    monthlyTarget: 240,
    currentPace: 260,
    status: 'ahead',
    aheadBy: 8,
    projectedCompletion: 'June 20',
    priority: 'medium',
    category: 'Short-term savings'
  },
  {
    id: 3,
    name: 'Wedding Savings',
    current: 6200,
    target: 15000,
    remaining: 8800,
    deadline: 'June 1, 2026',
    timeLeft: '5 months',
    monthlyTarget: 600,
    currentPace: 600,
    status: 'on-track',
    autoSave: true,
    priority: 'high',
    category: 'Long-term savings'
  }
];

export const DUMMY_BILLS = [
  {
    id: 1,
    name: 'Netflix Premium HD',
    amount: 15.99,
    dueDate: 'Jan 6',
    daysUntil: 1,
    autoPay: true,
    category: 'Subscriptions',
    usage: 'High',
    valueScore: 5,
    subscribedSince: 'Jan 2023'
  },
  {
    id: 2,
    name: 'Verizon',
    amount: 45.00,
    dueDate: 'Jan 7',
    daysUntil: 2,
    autoPay: false,
    category: 'Utilities'
  },
  {
    id: 3,
    name: 'Electric',
    amount: 85.00,
    dueDate: 'Jan 10',
    daysUntil: 5,
    predicted: true,
    category: 'Utilities'
  },
  {
    id: 4,
    name: 'Internet',
    amount: 60.00,
    dueDate: 'Jan 20',
    daysUntil: 15,
    autoPay: true,
    category: 'Utilities'
  },
  {
    id: 5,
    name: 'Rent',
    amount: 800.00,
    dueDate: 'Jan 15',
    daysUntil: 10,
    autoPay: false,
    category: 'Housing'
  }
];

export const DUMMY_SUBSCRIPTIONS = [
  {
    id: 1,
    name: 'Netflix Premium HD',
    amount: 15.99,
    renewalDate: 'Jan 6',
    usage: 'High',
    valueScore: 5,
    status: 'active'
  },
  {
    id: 2,
    name: 'Spotify Premium',
    amount: 10.99,
    renewalDate: 'Jan 12',
    usage: 'Medium',
    valueScore: 4,
    status: 'active',
    warning: 'Also have Apple Music'
  },
  {
    id: 3,
    name: 'iCloud Storage (50GB)',
    amount: 0.99,
    renewalDate: 'Jan 8',
    usage: '38GB/50GB used',
    valueScore: 5,
    status: 'active'
  },
  {
    id: 4,
    name: 'Adobe Creative Cloud',
    amount: 54.99,
    renewalDate: 'Jan 15',
    usage: 'Low',
    lastUsed: '67 days ago',
    valueScore: 1,
    status: 'unused',
    recommendation: 'CANCEL',
    potentialSaving: 660
  },
  {
    id: 5,
    name: 'Planet Fitness',
    amount: 24.99,
    renewalDate: 'Jan 18',
    usage: 'None',
    lastUsed: '3 months ago',
    valueScore: 1,
    status: 'unused',
    recommendation: 'CANCEL',
    potentialSaving: 300
  }
];

export const AI_INSIGHTS = [
  {
    id: 1,
    type: 'success',
    title: 'Great news!',
    message: 'You\'ve spent 28% less on dining this week compared to last week. Keep it up!',
    savings: 42
  },
  {
    id: 2,
    type: 'warning',
    title: 'Heads up!',
    message: 'Your Netflix subscription renews tomorrow ($15.99)',
    detail: 'Current balance can cover it'
  },
  {
    id: 3,
    type: 'suggestion',
    title: 'Smart suggestion',
    message: 'You have $460 extra cash this month.',
    options: [
      'Add to House Fund - reach goal 2 months faster',
      'Invest - potential $32 gain this year',
      'Keep as emergency buffer'
    ]
  },
  {
    id: 4,
    type: 'pattern',
    title: 'Spending pattern detected',
    message: 'You spend 2x more on weekends vs weekdays',
    suggestion: 'Weekend budget suggestion: Set $150 limit'
  }
];

export const CATEGORIES = [
  { id: 1, name: 'Food & Dining', key: 'dining', color: '#ef4444' },
  { id: 2, name: 'Coffee & Cafes', key: 'coffee', color: '#f59e0b' },
  { id: 3, name: 'Groceries', key: 'groceries', color: '#10b981' },
  { id: 4, name: 'Housing', key: 'housing', color: '#3b82f6' },
  { id: 5, name: 'Transportation', key: 'transportation', color: '#8b5cf6' },
  { id: 6, name: 'Entertainment', key: 'entertainment', color: '#ec4899' },
  { id: 7, name: 'Shopping', key: 'shopping', color: '#f97316' },
  { id: 8, name: 'Healthcare', key: 'healthcare', color: '#06b6d4' },
  { id: 9, name: 'Education', key: 'education', color: '#6366f1' },
  { id: 10, name: 'Income', key: 'income', color: '#22c55e' }
];

export const PAYMENT_METHODS = [
  { id: 1, name: 'Cash', type: 'cash' },
  { id: 2, name: 'Credit Card (Chase)', type: 'credit' },
  { id: 3, name: 'Debit Card (BofA)', type: 'debit' },
  { id: 4, name: 'Bank Transfer', type: 'transfer' },
  { id: 5, name: 'Other', type: 'other' }
];