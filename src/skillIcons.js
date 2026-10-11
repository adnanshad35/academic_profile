import {
  siAndroid,
  siAndroidstudio,
  siC,
  siCplusplus,
  siCss,
  siDart,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGooglecolab,
  siHtml5,
  siHuggingface,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPython,
  siPytorch,
  siScikitlearn,
  siTensorflow,
  siYolo,
} from 'simple-icons'

// Logo for each skill name used in data.js (paths from Simple Icons, 24x24 grid).
export const skillIcons = {
  Python: siPython,
  C: { ...siC, hex: '659AD2' },
  'C++': siCplusplus,
  Java: siOpenjdk,
  Dart: siDart,
  Flutter: siFlutter,
  Android: siAndroid,
  Firebase: siFirebase,
  HTML: siHtml5,
  CSS: siCss,
  Git: siGit,
  GitHub: siGithub,
  'Google Colab': siGooglecolab,
  'Android Studio': siAndroidstudio,
  'scikit-learn': siScikitlearn,
  pandas: siPandas,
  NumPy: siNumpy,
  PyTorch: siPytorch,
  TensorFlow: siTensorflow,
  YOLO: siYolo,
  'Transformers (BERT, LLaMA)': siHuggingface,
}

// Skills with no official logo get a short lettered tile instead.
export const skillMonograms = {
  'Logistic Regression': 'LR',
  'Random Forest': 'RF',
  SVM: 'SVM',
  XGBoost: 'XGB',
  CatBoost: 'CB',
  Matplotlib: 'MPL',
  Seaborn: 'SNS',
  SHAP: 'SHAP',
  'VS Code': 'VS',
  'CNNs (VGG, MobileNet)': 'CNN',
  'LSTM/GRU': 'RNN',
  GNNs: 'GNN',
  'Vision Transformers': 'ViT',
  VLMs: 'VLM',
}

// Brand colours this dark vanish on the dark theme, so those logos use the text colour.
export function isDarkBrand(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
  return 0.299 * r + 0.587 * g + 0.114 * b < 70
}
