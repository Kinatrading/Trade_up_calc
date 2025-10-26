const translations = {
  ua: {
    locale: 'uk',
    toggleLabel: 'ENG / UA',
    toggleAria: 'Перемкнути інтерфейс англійською',
    appTitle: 'Trade up calculator by Kina',
    heading: 'Trade up calculator by Kina',
    disclaimer: {
      title: 'Увага',
      message:
        'Калькулятор теоретично має працювати вірно, але прохання перевіряти самому, бо впевненості у всіх формулах немає. Базово — ми беремо % флота з флот рейнджу для всіх 10 предметів, сумуємо й отримуємо середній відсоток. Далі беремо кількість скінів з тієї чи іншої колекції, задаємо їм параметр 10% до шансу колекції і на виході вже отриманий шанс зі 100% ділимо між предметами однієї колекції. Має бути вірно, але це не точно.',
      close: 'Зрозуміло'
    },
    filters: {
      collectionLabel: 'Колекція або кейс',
      collectionPlaceholder: 'Оберіть колекцію або кейс',
      collectionLockedPlaceholder: 'Оберіть колекцію або кейс з предметами вибраної рідкості',
      itemLabel: 'Предмети з колекції',
      itemInitialPlaceholder: 'Спочатку оберіть колекцію',
      itemPlaceholder: 'Оберіть предмет',
      itemEmpty: 'Немає доступних предметів',
      itemNoRarity: 'У цій колекції немає предметів вибраної рідкості',
      itemNoLower: 'У цій колекції немає предметів нижче найвищої рідкості',
      itemLimit: 'Досягнуто ліміту у {{limit}} предметів',
      hint: 'Можна додати до {{limit}} предметів для розрахунку середнього флота.'
    },
    table: {
      item: 'Предмет',
      range: 'Флот рейндж',
      input: 'Внесений флот',
      percent: 'Відсоток',
      actions: 'Дії'
    },
    summary: {
      label: 'Середній відсоток флота по внесених предметах:'
    },
    upgrades: {
      title: 'Можливі результати наступної рідкості',
      placeholder:
        'Додайте {{limit}} предметів та введіть коректні значення флота, щоб побачити потенційні результати.',
      invalid:
        'Введіть коректні значення флота для кожного предмета, щоб побачити потенційні результати.',
      none: 'У вибраних колекціях немає предметів наступної рідкості.'
    },
    placeholders: {
      loading: 'Завантаження даних про скіни...',
      loadError: 'Не вдалося завантажити дані. Перевірте наявність файлу items_simplified.json.',
      selectCollection: 'Оберіть колекцію або кейс, щоб побачити доступні скіни.',
      collectionLocked: 'Оберіть колекцію або кейс з предметами вибраної рідкості.',
      collectionNoRarity: 'У цій колекції немає предметів вибраної рідкості.',
      collectionNoLower: 'У цій колекції немає предметів нижче найвищої рідкості.',
      addItem: 'Додайте предмет зі списку, щоб розпочати розрахунок.'
    },
    messages: {
      limitReached: 'Можна додати не більше {{limit}} предметів.',
      rarityMismatch: 'Усі предмети мають бути однієї рідкості.',
      collectionCategoryMismatch: 'Не можна змішувати колекції з рукавичками та ножами.',
      collectionNextRarityMismatch: 'Вибрані колекції мають мати однакову наступну рідкість.',
      itemNotFound: 'Не вдалося знайти вибраний предмет.'
    },
    averageStatus: {
      outOfRange: 'Введіть значення в межах флот рейнджу кожного предмета.',
      missing: 'Заповніть флот для кожного предмета, щоб побачити результат.'
    },
    actions: {
      duplicateAria: 'Дублювати {{name}}',
      removeAria: 'Прибрати {{name}}'
    },
    upgradeCard: {
      chanceLabel: 'Шанс випадіння',
      chanceValue: '{{label}}: {{value}}',
      chanceMissing: '{{label}}: —',
      rangeLabel: 'Флот рейндж:',
      expectedLabel: 'Очікуваний флот',
      expectedValue: '{{label}}: {{value}}',
      expectedMissing: '{{label}}: —',
      collectionsLabel: 'Колекції',
      collectionsValue: '{{label}}: {{value}}',
      breakdownSeparator: ' · '
    },
    footer: {
      text: 'Дані беруться з <code>data/items_simplified.json</code>. Замініть файл на актуальний, щоб працювати з повним списком.'
    },
    errors: {
      invalidData: 'items_simplified.json має бути масивом предметів',
      itemsLoadLog: 'Не вдалося завантажити дані про предмети'
    }
  },
  en: {
    locale: 'en',
    toggleLabel: 'UA / ENG',
    toggleAria: 'Switch the interface to Ukrainian',
    appTitle: 'Trade up calculator by Kina',
    heading: 'Trade up calculator by Kina',
    disclaimer: {
      title: 'Heads up',
      message:
        'The calculator should theoretically work correctly, but please double-check yourself because there is no full confidence in every formula. Basically, we take the float percentage from the float range for all 10 items, sum them up to get the average percentage. Then we take the number of skins from each collection, assign a 10% parameter to the collection chance, and finally split the resulting 100% chance among the items of the same collection. It should be correct, but it is not guaranteed.',
      close: 'Understood'
    },
    filters: {
      collectionLabel: 'Collection or case',
      collectionPlaceholder: 'Choose a collection or case',
      collectionLockedPlaceholder: 'Choose a collection or case with items of the selected rarity',
      itemLabel: 'Items from the collection',
      itemInitialPlaceholder: 'Choose a collection first',
      itemPlaceholder: 'Choose an item',
      itemEmpty: 'No items available',
      itemNoRarity: 'This collection has no items of the selected rarity',
      itemNoLower: 'This collection has no items below the highest rarity',
      itemLimit: 'Item limit of {{limit}} reached',
      hint: 'You can add up to {{limit}} items to calculate the average float.'
    },
    table: {
      item: 'Item',
      range: 'Float range',
      input: 'Entered float',
      percent: 'Percent',
      actions: 'Actions'
    },
    summary: {
      label: 'Average float percentage of the entered items:'
    },
    upgrades: {
      title: 'Possible outcomes of the next rarity',
      placeholder: 'Add {{limit}} items and enter valid float values to see potential results.',
      invalid: 'Enter valid float values for every item to see potential results.',
      none: 'No items of the next rarity are available in the selected collections.'
    },
    placeholders: {
      loading: 'Loading item data...',
      loadError: 'Failed to load data. Make sure items_simplified.json is available.',
      selectCollection: 'Choose a collection or case to see the available skins.',
      collectionLocked: 'Choose a collection or case with items of the selected rarity.',
      collectionNoRarity: 'This collection has no items of the selected rarity.',
      collectionNoLower: 'This collection has no items below the highest rarity.',
      addItem: 'Add an item from the list to start the calculation.'
    },
    messages: {
      limitReached: 'You can add no more than {{limit}} items.',
      rarityMismatch: 'All items must be of the same rarity.',
      collectionCategoryMismatch: 'You cannot mix glove and knife collections.',
      collectionNextRarityMismatch: 'Selected collections must share the same next rarity.',
      itemNotFound: 'The selected item could not be found.'
    },
    averageStatus: {
      outOfRange: 'Enter values within the float range for every item.',
      missing: 'Fill in the float for each item to see the result.'
    },
    actions: {
      duplicateAria: 'Duplicate {{name}}',
      removeAria: 'Remove {{name}}'
    },
    upgradeCard: {
      chanceLabel: 'Drop chance',
      chanceValue: '{{label}}: {{value}}',
      chanceMissing: '{{label}}: —',
      rangeLabel: 'Float range:',
      expectedLabel: 'Expected float',
      expectedValue: '{{label}}: {{value}}',
      expectedMissing: '{{label}}: —',
      collectionsLabel: 'Collections',
      collectionsValue: '{{label}}: {{value}}',
      breakdownSeparator: ' · '
    },
    footer: {
      text: 'Data is taken from <code>data/items_simplified.json</code>. Replace the file with an up-to-date version to work with the full list.'
    },
    errors: {
      invalidData: 'items_simplified.json must be an array of items',
      itemsLoadLog: 'Failed to load item data'
    }
  }
};

let currentLocale = 'ua';
let placeholderState = null;

function getTranslationObject(locale = currentLocale) {
  return translations[locale] ?? translations.ua;
}

function applyReplacements(template, replacements = {}) {
  if (typeof template !== 'string') {
    return '';
  }
  return template.replace(/{{(\w+)}}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(replacements, key)) {
      return String(replacements[key]);
    }
    return match;
  });
}

function t(key, replacements, locale = currentLocale) {
  const segments = key.split('.');
  let value = getTranslationObject(locale);
  for (const segment of segments) {
    if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
      value = value[segment];
    } else {
      value = null;
      break;
    }
  }
  if (value == null) {
    if (locale !== 'ua') {
      return t(key, replacements, 'ua');
    }
    return '';
  }
  if (typeof value === 'function') {
    return value(replacements ?? {});
  }
  if (typeof value === 'string') {
    return applyReplacements(value, replacements);
  }
  return '';
}

function getLocaleTag() {
  return getTranslationObject().locale ?? 'uk';
}

const htmlElement = document.documentElement;
const tableBody = document.querySelector('#itemsTable tbody');
const averageValueEl = document.querySelector('#averagePercent');
const averageStatusEl = document.querySelector('#averageStatus');
const placeholderEl = document.querySelector('#placeholderMessage');
const collectionSelect = document.querySelector('#collectionSelect');
const itemSelect = document.querySelector('#itemSelect');
const upgradeSection = document.querySelector('#upgradeSection');
const upgradePlaceholderEl = document.querySelector('#upgradePlaceholder');
const upgradeListEl = document.querySelector('#upgradeList');
const collectionChancesEl = document.querySelector('#collectionChances');
const languageToggleButton = document.querySelector('#languageToggle');
const appHeadingEl = document.querySelector('#appHeading');
const filtersCollectionLabelEl = document.querySelector('[data-i18n="filters.collectionLabel"]');
const filtersItemLabelEl = document.querySelector('[data-i18n="filters.itemLabel"]');
const filtersHintEl = document.querySelector('[data-i18n="filters.hint"]');
const tableHeaderEls = {
  item: document.querySelector('[data-i18n="table.item"]'),
  range: document.querySelector('[data-i18n="table.range"]'),
  input: document.querySelector('[data-i18n="table.input"]'),
  percent: document.querySelector('[data-i18n="table.percent"]'),
  actions: document.querySelector('[data-i18n="table.actions"]')
};
const summaryLabelEl = document.querySelector('[data-i18n="summary.label"]');
const upgradeTitleEl = document.querySelector('[data-i18n="upgrades.title"]');
const footerTextEl = document.querySelector('[data-i18n="footer.text"]');
const disclaimerEl = document.querySelector('#disclaimer');
const disclaimerTitleEl = document.querySelector('#disclaimerTitle');
const disclaimerMessageEl = document.querySelector('#disclaimerMessage');
const disclaimerCloseButton = document.querySelector('#disclaimerClose');

if (disclaimerEl) {
  disclaimerEl.setAttribute('aria-hidden', 'true');
}

const rarityStyles = {
  'Consumer Grade': { color: '#9ca3af', order: 0 },
  'Industrial Grade': { color: '#5b8df6', order: 1 },
  'Mil-Spec Grade': { color: '#1f45af', order: 2 },
  Restricted: { color: '#8b5cf6', order: 3 },
  Classified: { color: '#ec4899', order: 4 },
  Covert: { color: '#ef4444', order: 5 },
  Extraordinary: { color: '#ef4444', order: 6, star: true }
};

const DEFAULT_ITEM_LIMIT = 10;
const COVERT_ITEM_LIMIT = 5;
const COLLECTION_CATEGORY = {
  GLOVE: 'glove',
  KNIFE: 'knife'
};

const KNIFE_KEYWORDS = [
  'knife',
  'bayonet',
  'karambit',
  'dagger'
];

function isKnifeName(normalizedName) {
  return KNIFE_KEYWORDS.some((keyword) => normalizedName.includes(keyword));
}

let collectionIndex = new Map();
let selectedCollection = '';
let currentCollectionItems = [];
let selectedEntries = [];
let placeholderTimeoutId = null;
let lockedRarity = null;
let entryIdCounter = 0;
let allItems = [];
let currentAveragePercent = null;
let collectionCategories = new Map();
let lockedCollectionCategory = null;
let collectionRarityOrders = new Map();
let lockedNextRarityAvailability = null;

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function normalizeCollectionName(name) {
  if (typeof name !== 'string') {
    return null;
  }
  const trimmed = name.trim();
  return trimmed ? trimmed : null;
}

function getFloatBounds(item) {
  const min = Math.min(item.min_float, item.max_float);
  const max = Math.max(item.min_float, item.max_float);
  return { min, max };
}

function getItemLimit(rarityOverride) {
  const targetRarity = rarityOverride ?? lockedRarity ?? selectedEntries[0]?.item?.rarity ?? null;
  return targetRarity === 'Covert' ? COVERT_ITEM_LIMIT : DEFAULT_ITEM_LIMIT;
}

function updateFiltersHint() {
  if (!filtersHintEl) {
    return;
  }
  filtersHintEl.textContent = t('filters.hint', { limit: getItemLimit() });
}

function getItemCategory(item) {
  const name = typeof item?.name === 'string' ? item.name.trim() : '';
  if (!name) {
    return null;
  }
  const normalized = name.toLowerCase();
  if (normalized.includes('gloves') || normalized.includes('hand wraps')) {
    return COLLECTION_CATEGORY.GLOVE;
  }
  if (name.startsWith('★') || isKnifeName(normalized)) {
    return COLLECTION_CATEGORY.KNIFE;
  }
  return null;
}

function determineCollectionCategory(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  let detectedCategory = null;
  let isMixed = false;

  items.forEach((item) => {
    const category = getItemCategory(item);
    if (!category) {
      return;
    }
    if (!detectedCategory) {
      detectedCategory = category;
      return;
    }
    if (detectedCategory !== category) {
      isMixed = true;
    }
  });

  if (isMixed) {
    return null;
  }

  return detectedCategory;
}

function getCollectionCategory(collectionName) {
  const normalized = normalizeCollectionName(collectionName);
  if (!normalized) {
    return null;
  }
  return collectionCategories.get(normalized) ?? null;
}

function getEntryCollectionCategory(entry) {
  if (!entry) {
    return null;
  }
  const collectionName = normalizeCollectionName(entry.collectionName);
  if (collectionName) {
    return getCollectionCategory(collectionName);
  }
  return null;
}

function getCollectionRarityOrders(collectionName) {
  const normalized = normalizeCollectionName(collectionName);
  if (!normalized) {
    return null;
  }
  return collectionRarityOrders.get(normalized) ?? null;
}

function getCollectionNextRarityAvailability(collectionName, baseRarity) {
  if (!collectionName || !baseRarity) {
    return null;
  }
  const orders = getCollectionRarityOrders(collectionName);
  if (!orders || orders.size === 0) {
    return null;
  }
  const baseOrder = getRarityOrder(baseRarity);
  if (!Number.isFinite(baseOrder)) {
    return null;
  }
  const nextOrder = baseOrder + 1;
  return orders.has(nextOrder);
}

function isCollectionCategoryRestricted(collectionName) {
  const category = getCollectionCategory(collectionName);
  if (!lockedCollectionCategory || !category) {
    return false;
  }
  return lockedCollectionCategory !== category;
}

function isCollectionNextRarityRestricted(collectionName) {
  if (!lockedRarity || lockedNextRarityAvailability === null) {
    return false;
  }
  const availability = getCollectionNextRarityAvailability(collectionName, lockedRarity);
  if (availability === null) {
    return false;
  }
  return availability !== lockedNextRarityAvailability;
}

function isCollectionRestricted(collectionName) {
  return (
    isCollectionCategoryRestricted(collectionName) ||
    isCollectionNextRarityRestricted(collectionName)
  );
}

function applyCollectionCategoryRestrictions() {
  if (!collectionSelect) {
    return;
  }

  let selectionReset = false;

  Array.from(collectionSelect.options).forEach((option) => {
    if (!option.value) {
      option.disabled = false;
      return;
    }
    const shouldDisable = isCollectionRestricted(option.value);
    option.disabled = shouldDisable;
    if (shouldDisable && option.value === collectionSelect.value) {
      selectionReset = true;
    }
  });

  if (selectionReset) {
    collectionSelect.value = '';
    selectedCollection = '';
  }

  updateCollectionPlaceholder();

  if (selectionReset) {
    updateItemSelectForCollection();
  }
}

function updateLockedCollectionCategory() {
  const categories = new Set();
  selectedEntries.forEach((entry) => {
    const category = getEntryCollectionCategory(entry);
    if (category === COLLECTION_CATEGORY.GLOVE || category === COLLECTION_CATEGORY.KNIFE) {
      categories.add(category);
    }
  });

  if (categories.size === 0) {
    lockedCollectionCategory = null;
  } else if (categories.size === 1) {
    lockedCollectionCategory = categories.values().next().value;
  } else {
    lockedCollectionCategory = null;
  }

  applyCollectionCategoryRestrictions();
}

function updateLockedNextRarityAvailability() {
  if (!lockedRarity || selectedEntries.length === 0) {
    lockedNextRarityAvailability = null;
    applyCollectionCategoryRestrictions();
    return;
  }

  let detected = null;
  for (const entry of selectedEntries) {
    const collectionName = normalizeCollectionName(entry.collectionName);
    if (!collectionName) {
      continue;
    }
    const availability = getCollectionNextRarityAvailability(collectionName, lockedRarity);
    if (availability === null) {
      continue;
    }
    if (detected === null) {
      detected = availability;
    } else if (detected !== availability) {
      detected = null;
      break;
    }
  }

  lockedNextRarityAvailability = detected;
  applyCollectionCategoryRestrictions();
}

function clearPlaceholderTimeout() {
  if (placeholderTimeoutId) {
    clearTimeout(placeholderTimeoutId);
    placeholderTimeoutId = null;
  }
}

function showPlaceholder(message, options = {}) {
  clearPlaceholderTimeout();
  if (placeholderEl) {
    placeholderEl.textContent = message;
    placeholderEl.classList.remove('hidden');
  }
  if (options.key) {
    placeholderState = {
      type: 'key',
      key: options.key,
      replacements: options.replacements ?? {}
    };
  } else {
    placeholderState = { type: 'text', text: message };
  }
}

function showPlaceholderKey(key, replacements) {
  showPlaceholder(t(key, replacements), { key, replacements });
}

function hidePlaceholder() {
  clearPlaceholderTimeout();
  placeholderState = null;
  if (placeholderEl) {
    placeholderEl.textContent = '';
    placeholderEl.classList.add('hidden');
  }
}

function showTemporaryMessageKey(key, replacements) {
  showPlaceholderKey(key, replacements);
  placeholderTimeoutId = setTimeout(() => {
    placeholderTimeoutId = null;
    if (selectedEntries.length === 0) {
      const emptyStateKey = getEmptyStateKey();
      if (emptyStateKey) {
        showPlaceholderKey(emptyStateKey);
      } else {
        hidePlaceholder();
      }
    } else {
      hidePlaceholder();
    }
  }, 3200);
}

function refreshPlaceholderForLocale() {
  if (!placeholderState) {
    return;
  }
  if (placeholderState.type === 'key') {
    placeholderEl.textContent = t(placeholderState.key, placeholderState.replacements);
  }
}

function updateStaticTexts() {
  if (typeof document !== 'undefined') {
    document.title = t('appTitle');
  }
  if (appHeadingEl) {
    appHeadingEl.textContent = t('heading');
  }
  if (filtersCollectionLabelEl) {
    filtersCollectionLabelEl.textContent = t('filters.collectionLabel');
  }
  if (filtersItemLabelEl) {
    filtersItemLabelEl.textContent = t('filters.itemLabel');
  }
  updateFiltersHint();
  if (tableHeaderEls.item) {
    tableHeaderEls.item.textContent = t('table.item');
  }
  if (tableHeaderEls.range) {
    tableHeaderEls.range.textContent = t('table.range');
  }
  if (tableHeaderEls.input) {
    tableHeaderEls.input.textContent = t('table.input');
  }
  if (tableHeaderEls.percent) {
    tableHeaderEls.percent.textContent = t('table.percent');
  }
  if (tableHeaderEls.actions) {
    tableHeaderEls.actions.textContent = t('table.actions');
  }
  if (summaryLabelEl) {
    summaryLabelEl.textContent = t('summary.label');
  }
  if (upgradeTitleEl) {
    upgradeTitleEl.textContent = t('upgrades.title');
  }
  if (footerTextEl) {
    footerTextEl.innerHTML = t('footer.text');
  }
  if (languageToggleButton) {
    languageToggleButton.textContent = t('toggleLabel');
    languageToggleButton.setAttribute('aria-label', t('toggleAria'));
  }
  if (disclaimerTitleEl) {
    disclaimerTitleEl.textContent = t('disclaimer.title');
  }
  if (disclaimerMessageEl) {
    disclaimerMessageEl.textContent = t('disclaimer.message');
  }
  if (disclaimerCloseButton) {
    disclaimerCloseButton.textContent = t('disclaimer.close');
  }
}

function applyLocale(locale) {
  if (!translations[locale]) {
    locale = 'ua';
  }
  currentLocale = locale;
  const translation = getTranslationObject(locale);
  if (htmlElement) {
    htmlElement.setAttribute('lang', translation.locale ?? 'uk');
  }

  updateStaticTexts();
  populateCollections(true);
  updateItemSelectForCollection();
  renderTable();
  updateUpgradeSection();
  refreshPlaceholderForLocale();
}

function toggleLocale() {
  const nextLocale = currentLocale === 'ua' ? 'en' : 'ua';
  applyLocale(nextLocale);
}

function showDisclaimer() {
  if (!disclaimerEl) {
    return;
  }
  disclaimerEl.classList.remove('is-hidden');
  disclaimerEl.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    disclaimerCloseButton?.focus({ preventScroll: true });
  }, 0);
}

function hideDisclaimer() {
  if (!disclaimerEl) {
    return;
  }
  disclaimerEl.classList.add('is-hidden');
  disclaimerEl.setAttribute('aria-hidden', 'true');
}

function getRarityOrder(rarity) {
  return rarityStyles[rarity]?.order ?? Infinity;
}

function createRarityDot(rarity) {
  const dot = document.createElement('span');
  dot.className = 'rarity-dot';
  const style = rarityStyles[rarity];
  if (style) {
    dot.style.setProperty('--dot-color', style.color);
    if (style.star) {
      dot.classList.add('rarity-dot--star');
    }
  }
  return dot;
}

function handleItemValueChange(entry, rawValue, percentCell, inputEl) {
  entry.value = rawValue;

  if (!inputEl) {
    return;
  }

  if (!rawValue) {
    entry.hasValue = false;
    entry.isOutOfRange = false;
    entry.percent = null;
    inputEl.classList.remove('input-invalid');
    percentCell.textContent = '—';
    updateAverage();
    return;
  }

  const numericValue = Number.parseFloat(rawValue);
  const { min, max } = getFloatBounds(entry.item);

  if (!Number.isFinite(numericValue) || numericValue < min || numericValue > max) {
    entry.hasValue = true;
    entry.isOutOfRange = true;
    entry.percent = null;
    inputEl.classList.add('input-invalid');
    percentCell.textContent = '—';
    updateAverage();
    return;
  }

  const range = max - min;
  const ratio = range === 0 ? 1 : (numericValue - min) / range;

  entry.hasValue = true;
  entry.isOutOfRange = false;
  entry.percent = ratio;
  inputEl.classList.remove('input-invalid');
  percentCell.textContent = formatPercent(ratio);
  updateAverage();
}

function createRow(entry) {
  const { item, value, percent } = entry;
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  const title = document.createElement('div');
  title.className = 'item-title';
  title.append(createRarityDot(item.rarity));
  const name = document.createElement('span');
  name.textContent = item.name;
  title.appendChild(name);
  nameCell.appendChild(title);

  const rangeCell = document.createElement('td');
  const badge = document.createElement('span');
  badge.className = 'badge';
  const { min, max } = getFloatBounds(item);
  badge.textContent = `${min.toFixed(3)} - ${max.toFixed(3)}`;
  rangeCell.appendChild(badge);

  const percentCell = document.createElement('td');
  percentCell.className = 'percent-cell';
  percentCell.textContent = Number.isFinite(percent) ? formatPercent(percent) : '—';

  const inputCell = document.createElement('td');
  const input = document.createElement('input');
  input.type = 'number';
  input.step = '0.0000000000001';
  input.placeholder = '0.0000000000000';
  input.value = value;
  if (entry.isOutOfRange) {
    input.classList.add('input-invalid');
  }
  input.addEventListener('input', () => {
    handleItemValueChange(entry, input.value, percentCell, input);
  });
  inputCell.appendChild(input);

  const actionCell = document.createElement('td');
  const actionGroup = document.createElement('div');
  actionGroup.className = 'action-buttons';

  const duplicateButton = document.createElement('button');
  duplicateButton.type = 'button';
  duplicateButton.className = 'duplicate-button';
  duplicateButton.setAttribute('aria-label', t('actions.duplicateAria', { name: item.name }));
  duplicateButton.textContent = '⧉';
  duplicateButton.addEventListener('click', () => {
    duplicateEntry(entry);
  });

  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'remove-button';
  removeButton.setAttribute('aria-label', t('actions.removeAria', { name: item.name }));
  removeButton.textContent = '×';
  removeButton.addEventListener('click', () => {
    removeItem(entry.id);
  });

  actionGroup.append(duplicateButton, removeButton);
  actionCell.appendChild(actionGroup);

  row.append(nameCell, rangeCell, inputCell, percentCell, actionCell);

  return row;
}

function applyRarityLock(items) {
  if (!lockedRarity) {
    return items;
  }
  return items.filter((item) => item.rarity === lockedRarity);
}

function updateCollectionPlaceholder() {
  if (!collectionSelect) {
    return;
  }
  const placeholderOption = collectionSelect.querySelector('option[value=""]');
  if (placeholderOption) {
    const key = lockedRarity ? 'filters.collectionLockedPlaceholder' : 'filters.collectionPlaceholder';
    placeholderOption.textContent = t(key);
  }
}

function updateItemSelectForCollection() {
  updateCollectionPlaceholder();

  updateFiltersHint();

  const limit = getItemLimit();

  if (!selectedCollection) {
    currentCollectionItems = [];
    const limitReached = selectedEntries.length >= limit;
    const placeholderKey = limitReached ? 'filters.itemLimit' : 'filters.itemInitialPlaceholder';
    populateItemSelect([], t(placeholderKey, { limit }));
    itemSelect.disabled = limitReached;
    return;
  }

  if (isCollectionRestricted(selectedCollection)) {
    selectedCollection = '';
    updateItemSelectForCollection();
    return;
  }

  const itemsForCollection = collectionIndex.get(selectedCollection) ?? [];
  const { items: cappedItems, removedHighestRarity } = filterByRarityCap(itemsForCollection);
  const filteredItems = applyRarityLock(cappedItems);
  currentCollectionItems = filteredItems;

  const limitReached = selectedEntries.length >= limit;
  let placeholderKey = 'filters.itemPlaceholder';
  if (limitReached) {
    placeholderKey = 'filters.itemLimit';
  } else if (lockedRarity && filteredItems.length === 0) {
    placeholderKey = 'filters.itemNoRarity';
  } else if (!lockedRarity && filteredItems.length === 0 && removedHighestRarity) {
    placeholderKey = 'filters.itemNoLower';
  } else if (filteredItems.length === 0) {
    placeholderKey = 'filters.itemEmpty';
  }

  populateItemSelect(filteredItems, t(placeholderKey, { limit }));

  itemSelect.disabled = limitReached || filteredItems.length === 0;
}

function addEntry(item, options = {}) {
  const { collectionName, initialValue = '', initialPercent = null } = options ?? {};
  const limit = getItemLimit(lockedRarity ?? item?.rarity);
  if (selectedEntries.length >= limit) {
    showTemporaryMessageKey('messages.limitReached', { limit });
    return false;
  }

  if (lockedRarity && item.rarity !== lockedRarity) {
    showTemporaryMessageKey('messages.rarityMismatch');
    return false;
  }

  const normalizedValue = initialValue ?? '';
  const value = normalizedValue === '' ? '' : String(normalizedValue);
  const percent = Number.isFinite(initialPercent) ? initialPercent : null;
  const hasInitialValue = value !== '';

  const resolvedCollection =
    normalizeCollectionName(collectionName) ?? normalizeCollectionName(selectedCollection);

  let storedCollection = resolvedCollection;
  if (!storedCollection && Array.isArray(item?.collections_or_crates)) {
    storedCollection = item.collections_or_crates
      .map((collectionNameRaw) => normalizeCollectionName(collectionNameRaw))
      .find(Boolean);
  }

  const collectionCategory = storedCollection ? getCollectionCategory(storedCollection) : null;
  if (
    collectionCategory &&
    lockedCollectionCategory &&
    lockedCollectionCategory !== collectionCategory
  ) {
    showTemporaryMessageKey('messages.collectionCategoryMismatch');
    return false;
  }

  const nextRarityAvailability = storedCollection
    ? getCollectionNextRarityAvailability(
        storedCollection,
        lockedRarity ?? item?.rarity ?? null
      )
    : null;

  if (
    lockedRarity &&
    lockedNextRarityAvailability !== null &&
    nextRarityAvailability !== null &&
    nextRarityAvailability !== lockedNextRarityAvailability
  ) {
    showTemporaryMessageKey('messages.collectionNextRarityMismatch');
    return false;
  }

  const entry = {
    id: (entryIdCounter += 1),
    item,
    collectionName: storedCollection ?? null,
    value,
    percent,
    hasValue: hasInitialValue,
    isOutOfRange: hasInitialValue && percent === null
  };

  selectedEntries.push(entry);

  if (!lockedRarity) {
    lockedRarity = item.rarity;
  }

  if (!lockedCollectionCategory && collectionCategory) {
    lockedCollectionCategory = collectionCategory;
  }

  updateLockedCollectionCategory();
  updateLockedNextRarityAvailability();
  renderTable();
  updateItemSelectForCollection();
  return true;
}

function duplicateEntry(entry) {
  addEntry(entry.item, {
    collectionName: entry.collectionName,
    initialValue: entry.value,
    initialPercent: entry.percent
  });
}

function updateAverage() {
  if (selectedEntries.length === 0) {
    averageValueEl.textContent = '—';
    averageStatusEl.textContent = '';
    currentAveragePercent = null;
    updateUpgradeSection();
    return;
  }

  const hasOutOfRange = selectedEntries.some((entry) => entry.isOutOfRange);
  if (hasOutOfRange) {
    averageValueEl.textContent = '—';
    averageStatusEl.textContent = t('averageStatus.outOfRange');
    currentAveragePercent = null;
    updateUpgradeSection();
    return;
  }

  const hasMissingValues = selectedEntries.some((entry) => !entry.hasValue);
  if (hasMissingValues) {
    averageValueEl.textContent = '—';
    averageStatusEl.textContent = t('averageStatus.missing');
    currentAveragePercent = null;
    updateUpgradeSection();
    return;
  }

  const validPercents = selectedEntries
    .map((entry) => entry.percent)
    .filter((value) => Number.isFinite(value));

  if (validPercents.length === 0) {
    averageValueEl.textContent = '—';
    averageStatusEl.textContent = '';
    currentAveragePercent = null;
    updateUpgradeSection();
    return;
  }

  const average = validPercents.reduce((sum, value) => sum + value, 0) / validPercents.length;
  averageValueEl.textContent = formatPercent(average);
  averageStatusEl.textContent = '';
  currentAveragePercent = average;
  updateUpgradeSection();
}

function calculateExpectedFloat(bounds, ratio) {
  if (!Number.isFinite(ratio)) {
    return null;
  }
  const { min, max } = bounds;
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return null;
  }
  const range = max - min;
  if (range === 0) {
    return min;
  }
  const value = min + range * ratio;
  return Math.min(Math.max(value, min), max);
}

function getSelectedCollectionCounts() {
  const counts = new Map();
  selectedEntries.forEach((entry) => {
    const stored = normalizeCollectionName(entry.collectionName);
    if (stored) {
      counts.set(stored, (counts.get(stored) ?? 0) + 1);
      return;
    }

    if (!Array.isArray(entry.item?.collections_or_crates)) {
      return;
    }

    const fallback = entry.item.collections_or_crates
      .map((collectionName) => normalizeCollectionName(collectionName))
      .find(Boolean);

    if (!fallback) {
      return;
    }

    counts.set(fallback, (counts.get(fallback) ?? 0) + 1);
  });
  return counts;
}

function getSelectedCollections() {
  return new Set(getSelectedCollectionCounts().keys());
}

function getCollectionChanceMap(collectionCounts) {
  const chanceMap = new Map();
  if (!collectionCounts) {
    return chanceMap;
  }

  const limit = Math.max(getItemLimit(), 1);

  collectionCounts.forEach((count, collectionName) => {
    const normalizedName = normalizeCollectionName(collectionName);
    const numericCount = Number(count);
    if (!normalizedName || !Number.isFinite(numericCount) || numericCount <= 0) {
      return;
    }
    chanceMap.set(normalizedName, Math.min(numericCount / limit, 1));
  });

  return chanceMap;
}

function renderCollectionChances(collectionChanceMap) {
  if (!collectionChancesEl) {
    return;
  }

  const entries = Array.from(collectionChanceMap.entries()).filter(([, chance]) => chance > 0);

  if (!entries.length) {
    collectionChancesEl.classList.add('is-hidden');
    collectionChancesEl.innerHTML = '';
    return;
  }

  collectionChancesEl.classList.remove('is-hidden');
  collectionChancesEl.innerHTML = '';

  const fragment = document.createDocumentFragment();
  entries
    .sort((a, b) => {
      const chanceDiff = b[1] - a[1];
      if (chanceDiff !== 0) {
        return chanceDiff;
      }
      return a[0].localeCompare(b[0], getLocaleTag());
    })
    .forEach(([collectionName, chance]) => {
      const row = document.createElement('div');
      row.className = 'upgrade-chance';

      const label = document.createElement('span');
      label.className = 'upgrade-chance__label';
      label.textContent = collectionName;

      const value = document.createElement('span');
      value.className = 'upgrade-chance__value';
      value.textContent = formatPercent(chance);

      row.append(label, value);
      fragment.appendChild(row);
    });

  collectionChancesEl.appendChild(fragment);
}

function decorateCandidatesWithChances(candidates, collectionChanceMap) {
  if (!Array.isArray(candidates) || candidates.length === 0) {
    return [];
  }

  const optionsPerCollection = new Map();
  candidates.forEach((candidate) => {
    const candidateCollections = Array.isArray(candidate.collections)
      ? candidate.collections
      : [];
    const uniqueCollections = new Set();
    candidateCollections.forEach((collectionName) => {
      const normalized = normalizeCollectionName(collectionName);
      if (!normalized || uniqueCollections.has(normalized)) {
        return;
      }
      uniqueCollections.add(normalized);
      optionsPerCollection.set(normalized, (optionsPerCollection.get(normalized) ?? 0) + 1);
    });
  });

  return candidates.map((candidate) => {
    const candidateCollections = Array.isArray(candidate.collections)
      ? candidate.collections
      : [];

    const uniqueCollections = Array.from(
      new Set(
        candidateCollections
          .map((collectionName) => normalizeCollectionName(collectionName))
          .filter(Boolean)
      )
    );

    const chanceBreakdown = uniqueCollections.map((collectionName) => {
      const collectionChance = collectionChanceMap.get(collectionName) ?? 0;
      const options = optionsPerCollection.get(collectionName) ?? 0;
      if (collectionChance <= 0 || options <= 0) {
        return { collectionName, chance: 0 };
      }
      return { collectionName, chance: collectionChance / options };
    });

    const totalChance = chanceBreakdown.reduce((sum, entry) => sum + entry.chance, 0);

    return {
      ...candidate,
      chance: totalChance,
      chanceBreakdown
    };
  });
}

function computeUpgradeCandidates() {
  if (!lockedRarity) {
    return [];
  }

  const nextRarityOrder = getRarityOrder(lockedRarity) + 1;
  if (!Number.isFinite(nextRarityOrder)) {
    return [];
  }

  const collections = getSelectedCollections();
  if (collections.size === 0) {
    return [];
  }

  const candidates = allItems
    .filter((item) => getRarityOrder(item.rarity) === nextRarityOrder)
    .map((item) => {
      if (!Array.isArray(item.collections_or_crates)) {
        return null;
      }
      const matchingCollections = Array.from(
        new Set(
          item.collections_or_crates
            .map((collectionNameRaw) => collectionNameRaw?.trim())
            .filter((collectionName) => collectionName && collections.has(collectionName))
        )
      );
      if (matchingCollections.length === 0) {
        return null;
      }
      return { item, collections: matchingCollections };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const firstCollectionA = a.collections[0] ?? '';
      const firstCollectionB = b.collections[0] ?? '';
      const collectionDiff = firstCollectionA.localeCompare(firstCollectionB, getLocaleTag());
      if (collectionDiff !== 0) {
        return collectionDiff;
      }
      return a.item.name.localeCompare(b.item.name, getLocaleTag());
    });

  return candidates;
}

function createUpgradeCard(candidate) {
  const { item, collections, chance, chanceBreakdown } = candidate;
  const card = document.createElement('div');
  card.className = 'upgrade-card';

  const header = document.createElement('div');
  header.className = 'upgrade-card__header';
  header.append(createRarityDot(item.rarity));
  const name = document.createElement('span');
  name.textContent = item.name;
  header.appendChild(name);

  const chanceEl = document.createElement('div');
  chanceEl.className = 'upgrade-card__chance';
  const normalizedChance = Number.isFinite(chance) ? Math.max(0, Math.min(chance, 1)) : null;
  const chanceLabel = t('upgradeCard.chanceLabel');
  chanceEl.textContent = Number.isFinite(normalizedChance)
    ? t('upgradeCard.chanceValue', { label: chanceLabel, value: formatPercent(normalizedChance) })
    : t('upgradeCard.chanceMissing', { label: chanceLabel });

  const range = document.createElement('div');
  range.className = 'upgrade-card__range';
  const rangeLabel = document.createElement('span');
  rangeLabel.textContent = t('upgradeCard.rangeLabel');
  const { min, max } = getFloatBounds(item);
  const rangeBadge = document.createElement('span');
  rangeBadge.className = 'badge';
  rangeBadge.textContent = `${min.toFixed(3)} - ${max.toFixed(3)}`;
  range.append(rangeLabel, rangeBadge);

  const expectedFloat = calculateExpectedFloat({ min, max }, currentAveragePercent);
  const value = document.createElement('div');
  value.className = 'upgrade-card__value';
  const expectedLabel = t('upgradeCard.expectedLabel');
  value.textContent = Number.isFinite(expectedFloat)
    ? t('upgradeCard.expectedValue', {
        label: expectedLabel,
        value: expectedFloat.toFixed(6)
      })
    : t('upgradeCard.expectedMissing', { label: expectedLabel });

  card.append(header, chanceEl, value, range);

  const breakdownEntries = Array.isArray(chanceBreakdown)
    ? chanceBreakdown.filter((entry) => entry.chance > 0)
    : [];
  if (breakdownEntries.length) {
    const breakdownEl = document.createElement('div');
    breakdownEl.className = 'upgrade-card__chance-breakdown';
    const separator = t('upgradeCard.breakdownSeparator') || ' · ';
    breakdownEl.textContent = breakdownEntries
      .map((entry) => `${entry.collectionName}: ${formatPercent(entry.chance)}`)
      .join(separator);
    card.appendChild(breakdownEl);
  }

  if (collections.length > 0) {
    const collectionsEl = document.createElement('div');
    collectionsEl.className = 'upgrade-card__collections';
    collectionsEl.textContent = t('upgradeCard.collectionsValue', {
      label: t('upgradeCard.collectionsLabel'),
      value: collections.join(', ')
    });
    card.appendChild(collectionsEl);
  }

  return card;
}

function setUpgradePlaceholder(key, replacements) {
  if (!upgradePlaceholderEl) {
    return;
  }
  if (!key) {
    upgradePlaceholderEl.textContent = '';
    upgradePlaceholderEl.classList.add('is-hidden');
    return;
  }
  upgradePlaceholderEl.textContent = t(key, replacements);
  upgradePlaceholderEl.classList.remove('is-hidden');
}

function updateUpgradeSection() {
  if (!upgradeSection) {
    return;
  }

  const limit = getItemLimit();

  if (!lockedRarity || selectedEntries.length < limit) {
    upgradeSection.classList.add('is-hidden');
    upgradeListEl.innerHTML = '';
    renderCollectionChances(new Map());
    setUpgradePlaceholder('upgrades.placeholder', { limit });
    return;
  }

  upgradeSection.classList.remove('is-hidden');
  upgradeListEl.innerHTML = '';

  if (currentAveragePercent === null) {
    renderCollectionChances(new Map());
    setUpgradePlaceholder('upgrades.invalid');
    return;
  }

  const candidates = computeUpgradeCandidates();
  const collectionCounts = getSelectedCollectionCounts();
  const collectionChanceMap = getCollectionChanceMap(collectionCounts);

  if (!candidates.length) {
    renderCollectionChances(new Map());
    setUpgradePlaceholder('upgrades.none');
    return;
  }

  const decoratedCandidates = decorateCandidatesWithChances(candidates, collectionChanceMap);

  renderCollectionChances(collectionChanceMap);
  setUpgradePlaceholder(null);

  const fragment = document.createDocumentFragment();
  decoratedCandidates.forEach((candidate) => {
    fragment.appendChild(createUpgradeCard(candidate));
  });
  upgradeListEl.appendChild(fragment);
}

function getEmptyStateKey() {
  if (!selectedCollection) {
    return lockedRarity ? 'placeholders.collectionLocked' : 'placeholders.selectCollection';
  }
  if (itemSelect.disabled) {
    return lockedRarity ? 'placeholders.collectionNoRarity' : 'placeholders.collectionNoLower';
  }
  return 'placeholders.addItem';
}

function renderTable() {
  tableBody.innerHTML = '';

  if (selectedEntries.length === 0) {
    updateAverage();
    const emptyKey = getEmptyStateKey();
    if (emptyKey) {
      showPlaceholderKey(emptyKey);
    }
    return;
  }

  hidePlaceholder();
  selectedEntries.forEach((entry) => {
    const row = createRow(entry);
    tableBody.appendChild(row);
  });
  updateAverage();
}

function sortItems(items) {
  return [...items].sort((a, b) => {
    const orderDiff = getRarityOrder(a.rarity) - getRarityOrder(b.rarity);
    if (orderDiff !== 0) {
      return orderDiff;
    }
    return a.name.localeCompare(b.name, getLocaleTag());
  });
}

function buildCollectionIndex(items) {
  const map = new Map();
  const categories = new Map();
  const rarityOrdersMap = new Map();
  items.forEach((item) => {
    if (!Array.isArray(item.collections_or_crates)) {
      return;
    }
    item.collections_or_crates.forEach((collectionNameRaw) => {
      const collectionName = collectionNameRaw.trim();
      if (!collectionName) {
        return;
      }
      const existing = map.get(collectionName) ?? [];
      existing.push(item);
      map.set(collectionName, existing);
    });
  });

  for (const [collectionName, collectionItems] of map.entries()) {
    const sorted = sortItems(collectionItems);
    map.set(collectionName, sorted);
    categories.set(collectionName, determineCollectionCategory(sorted));
    const orders = new Set();
    sorted.forEach((collectionItem) => {
      const order = getRarityOrder(collectionItem.rarity);
      if (Number.isFinite(order)) {
        orders.add(order);
      }
    });
    rarityOrdersMap.set(collectionName, orders);
  }

  collectionCategories = categories;
  collectionRarityOrders = rarityOrdersMap;

  return map;
}

function populateCollections(preserveSelection = false) {
  if (!collectionSelect) {
    return;
  }

  const previousValue = preserveSelection ? collectionSelect.value : '';
  const collections = Array.from(collectionIndex.keys()).sort((a, b) =>
    a.localeCompare(b, getLocaleTag())
  );
  const firstOption = document.createElement('option');
  firstOption.value = '';
  firstOption.textContent = t(
    lockedRarity ? 'filters.collectionLockedPlaceholder' : 'filters.collectionPlaceholder'
  );

  collectionSelect.innerHTML = '';
  collectionSelect.appendChild(firstOption);
  collections.forEach((collection) => {
    const option = document.createElement('option');
    option.value = collection;
    option.textContent = collection;
    collectionSelect.appendChild(option);
  });

  if (preserveSelection && previousValue && collectionIndex.has(previousValue)) {
    collectionSelect.value = previousValue;
    selectedCollection = previousValue;
  } else if (!collectionIndex.has(selectedCollection)) {
    selectedCollection = '';
    collectionSelect.value = '';
  }

  applyCollectionCategoryRestrictions();
}

function populateItemSelect(items, placeholderText) {
  const list = Array.isArray(items) ? items : [];
  const placeholder =
    placeholderText ?? (list.length ? t('filters.itemPlaceholder') : t('filters.itemEmpty'));

  itemSelect.innerHTML = '';
  const option = document.createElement('option');
  option.value = '';
  option.textContent = placeholder;
  itemSelect.appendChild(option);

  list.forEach((item) => {
    const itemOption = document.createElement('option');
    itemOption.value = item.name;
    itemOption.textContent = item.name;
    itemSelect.appendChild(itemOption);
  });

  itemSelect.disabled = list.length === 0;
  itemSelect.value = '';
}

function filterByRarityCap(items) {
  if (items.length === 0) {
    return { items: [], removedHighestRarity: false };
  }

  let highestOrder = -Infinity;
  let hasFiniteOrder = false;

  items.forEach((item) => {
    const order = getRarityOrder(item.rarity);
    if (Number.isFinite(order)) {
      hasFiniteOrder = true;
      if (order > highestOrder) {
        highestOrder = order;
      }
    }
  });

  if (!hasFiniteOrder) {
    return { items, removedHighestRarity: false };
  }

  const filtered = items.filter((item) => {
    const order = getRarityOrder(item.rarity);
    if (!Number.isFinite(order)) {
      return true;
    }
    return order < highestOrder;
  });

  const removedHighestRarity = filtered.length !== items.length;

  return { items: filtered, removedHighestRarity };
}

function handleCollectionChange(event) {
  const nextCollection = event.target.value;
  if (nextCollection) {
    if (isCollectionCategoryRestricted(nextCollection)) {
      showTemporaryMessageKey('messages.collectionCategoryMismatch');
      event.target.value = '';
      selectedCollection = '';
      updateItemSelectForCollection();
      return;
    }
    if (isCollectionNextRarityRestricted(nextCollection)) {
      showTemporaryMessageKey('messages.collectionNextRarityMismatch');
      event.target.value = '';
      selectedCollection = '';
      updateItemSelectForCollection();
      return;
    }
  }

  selectedCollection = nextCollection;
  updateItemSelectForCollection();
  renderTable();
}

function handleItemSelect(event) {
  const itemName = event.target.value;
  if (!itemName) {
    return;
  }

  event.target.value = '';

  const item = currentCollectionItems.find((candidate) => candidate.name === itemName);
  if (!item) {
    showTemporaryMessageKey('messages.itemNotFound');
    return;
  }

  addEntry(item, { collectionName: selectedCollection });
}

function removeItem(entryId) {
  const index = selectedEntries.findIndex((entry) => entry.id === entryId);
  if (index === -1) {
    return;
  }
  selectedEntries.splice(index, 1);
  if (selectedEntries.length === 0) {
    lockedRarity = null;
    lockedCollectionCategory = null;
    lockedNextRarityAvailability = null;
  }
  updateLockedCollectionCategory();
  updateLockedNextRarityAvailability();
  renderTable();
  updateItemSelectForCollection();
}

async function bootstrap() {
  showPlaceholderKey('placeholders.loading');

  try {
    const response = await fetch(chrome.runtime.getURL('data/items_simplified.json'));
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error(t('errors.invalidData'));
    }
    const sortedItems = sortItems(data);
    allItems = sortedItems;
    collectionIndex = buildCollectionIndex(sortedItems);
    populateCollections();
    updateItemSelectForCollection();
    renderTable();
  } catch (error) {
    console.error(t('errors.itemsLoadLog'), error);
    showPlaceholderKey('placeholders.loadError');
  }
}

collectionSelect.addEventListener('change', handleCollectionChange);
itemSelect.addEventListener('change', handleItemSelect);

languageToggleButton?.addEventListener('click', toggleLocale);
disclaimerCloseButton?.addEventListener('click', hideDisclaimer);
disclaimerEl?.addEventListener('click', (event) => {
  if (event.target === disclaimerEl) {
    hideDisclaimer();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !disclaimerEl?.classList.contains('is-hidden')) {
    hideDisclaimer();
  }
});

applyLocale(currentLocale);
showDisclaimer();

bootstrap();
