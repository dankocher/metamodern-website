// OUTSOURCING

export enum ServicesTypes {
  WEBSITE = 'WEBSITE',
  MOBILE = 'MOBILE',
  MVP = 'MVP',
  DESIGN = 'DESIGN',
  TESTING = 'TESTING',
  PRODUCT_SUPPORT = 'PRODUCT_SUPPORT',
  OTHER = 'OTHER',
}

export const servicesTypes = {
  [ServicesTypes.WEBSITE]: 'Website',
  [ServicesTypes.MOBILE]: 'Mobile dev',
  [ServicesTypes.MVP]: 'MVP dev',
  [ServicesTypes.DESIGN]: 'Design',
  [ServicesTypes.TESTING]: 'Testing & QA',
  [ServicesTypes.PRODUCT_SUPPORT]: 'Product support',
  [ServicesTypes.OTHER]: 'Other',
};

export enum IndustryTypes {
  PRODUCTIVITY = 'PRODUCTIVITY',
  HEALTHCARE = 'HEALTHCARE',
  ED_TECH = 'ED_TECH',
  FIN_TECH = 'FIN_TECH',
  REAL_TECH = 'REAL_TECH',
  INTERNET = 'INTERNET',
  LOGISTICS = 'LOGISTICS',
  TOURISM = 'TOURISM',
  OTHER = 'OTHER',
}

export const industryTypes = {
  [IndustryTypes.PRODUCTIVITY]: 'Productivity & Self-improvement',
  [IndustryTypes.HEALTHCARE]: 'Healthcare',
  [IndustryTypes.ED_TECH]: 'EdTech',
  [IndustryTypes.FIN_TECH]: 'FinTech',
  [IndustryTypes.REAL_TECH]: 'RealTech',
  [IndustryTypes.INTERNET]: 'Internet of Things',
  [IndustryTypes.LOGISTICS]: 'Logistics',
  [IndustryTypes.TOURISM]: 'Travel & Tourism',
  [IndustryTypes.OTHER]: 'Other',
};

// OUTSTAFFING

export enum FrontEndTypes {
  JAVA_SCRIPT = 'JAVA_SCRIPT',
  REACT = 'REACT',
  VUE = 'VUE',
  ANGULAR = 'ANGULAR',
  OTHER = 'OTHER',
}

export const frontEndTypes = {
  [FrontEndTypes.JAVA_SCRIPT]: 'JavaScript',
  [FrontEndTypes.REACT]: 'React JS',
  [FrontEndTypes.VUE]: 'Vue JS',
  [FrontEndTypes.ANGULAR]: 'Angular',
  [FrontEndTypes.OTHER]: 'Other',
};

export enum BackEndTypes {
  PHP = 'PHP',
  PYTON = 'PYTON',
  NODE = 'NODE',
  MANGO_DB = 'MANGO_DB',
  MY_SQL = 'MY_SQL',
  OTHER = 'OTHER',
}

export const backEndTypes = {
  [BackEndTypes.PHP]: 'PHP',
  [BackEndTypes.PYTON]: 'Python',
  [BackEndTypes.NODE]: 'Node.js',
  [BackEndTypes.MANGO_DB]: 'MongoDB',
  [BackEndTypes.MY_SQL]: 'MySQL',
  [BackEndTypes.OTHER]: 'Other',
};

export enum MobileTypes {
  SWIFT = 'SWIFT',
  KOTLIN = 'KOTLIN',
  REACT_NATIVE = 'REACT_NATIVE',
  FLUTTER = 'FLUTTER',
  OTHER = 'OTHER',
}

export const mobileTypes = {
  [MobileTypes.SWIFT]: 'Swift (iOS)',
  [MobileTypes.KOTLIN]: 'Kotlin (Android)',
  [MobileTypes.REACT_NATIVE]: 'React native',
  [MobileTypes.FLUTTER]: 'Flutter',
  [MobileTypes.OTHER]: 'Other',
};

export enum TestingTypes {
  TESTING_PYTON = 'TESTING_PYTON',
  TESTING_JAVA_SCRIPT = 'TESTING_JAVA_SCRIPT',
  TESTING_RUBY = 'TESTING_RUBY',
  TESTING_JAVA = 'TESTING_JAVA',
  OTHER = 'OTHER',
}

export const testingTypes = {
  [TestingTypes.TESTING_PYTON]: 'Python',
  [TestingTypes.TESTING_JAVA_SCRIPT]: 'JavaScript',
  [TestingTypes.TESTING_RUBY]: 'Ruby',
  [TestingTypes.TESTING_JAVA]: 'Java',
  [TestingTypes.OTHER]: 'Other',
};

export enum AdditionalServicesTypes {
  PRODUCT_SUPPORT = 'PRODUCT_SUPPORT',
  DESIGN = 'DESIGN',
  OTHER = 'OTHER',
}

export const additionalServicesTypes = {
  [AdditionalServicesTypes.PRODUCT_SUPPORT]: 'Product support',
  [AdditionalServicesTypes.DESIGN]: 'Design',
  [AdditionalServicesTypes.OTHER]: 'Other',
};
