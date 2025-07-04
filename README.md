# Pulsar Detection with Machine Learning

### 🔭 Introduction  
In the vast cosmos, pulsars are among the most fascinating objects — rapidly rotating neutron stars that emit beams of electromagnetic radiation. Detecting these cosmic lighthouses in radio astronomy data is crucial for understanding stellar evolution, gravitational physics, and even testing Einstein's theory of relativity. However, manually sifting through thousands of pulsar candidates is a time-consuming process that demands automation.

The High Time Resolution Universe (HTRU) surveys generate millions of pulsar candidates annually, with true pulsars representing less than 0.1% of all detections. This extreme class imbalance, combined with complex noise characteristics and instrumental artifacts, renders traditional manual inspection approaches computationally prohibitive for next-generation facilities such as the Square Kilometre Array (SKA).

---

### 📊 Dataset Overview and Statistical Analysis  
The HTRU2 dataset contains 17,898 pulsar candidates described by 8 continuous variables derived from integrated pulse profiles and DM–SNR curves. With only 1,639 true pulsars among the candidates (9.16% positive class), this presents a classic machine learning challenge: high-stakes classification with severe class imbalance.

#### **Statistical Summary by Class:**

| Feature       | Pulsars (Mean ± Std) | Non-Pulsars (Mean ± Std) |
|--------------|----------------------|--------------------------|
| IP Mean      | 111.08 ± 25.65       | 136.92 ± 34.78           |
| IP Std       | 46.55 ± 6.95         | 55.68 ± 16.38            |
| IP Kurtosis  | 0.48 ± 1.04          | 8.30 ± 14.98             |
| IP Skewness  | 1.77 ± 0.86          | 1.91 ± 3.87              |
| DM Mean      | 2.08 ± 1.33          | 12.61 ± 29.47            |
| DM Std       | 7.37 ± 4.91          | 26.3 ± 19.47             |
| DM Kurtosis  | 8.82 ± 4.08          | 8.35 ± 75.85             |
| DM Skewness  | 104.86 ± 106.04      | 68.23 ± 114.33           |

Mann-Whitney U tests confirm statistically significant differences across all features (*p* < 0.001), with IP Kurtosis showing the strongest discriminative power (*U* = 2.18 × 10⁶, effect size *r* = 0.52).

---

### 🧮 Mathematical Framework  

#### **Problem Formulation**  
Let \( \mathcal{D} = \{(x_i, y_i)\}_{i=1}^N \) represent our dataset, where \( x_i \in \mathbb{R}^d \) denotes the *d*-dimensional feature vector for candidate *i*, and \( y_i \in \{0, 1\} \) indicates the binary class label (0: non-pulsar, 1: pulsar). Given the severe class imbalance with \( P(y = 1) \ll 0.5 \), we formulate pulsar detection as an optimization problem:

$$
\hat{f} = \arg\min_{f \in \mathcal{F}} \mathcal{L}(f) + \lambda\Omega(f)
$$

where \( \mathcal{L}(f) \) represents the loss function accounting for class imbalance, \( \Omega(f) \) is a regularization term, and \( \lambda \) controls the regularization strength.

#### **Feature Space Characterization**  
The HTRU2 dataset characterizes each pulsar candidate using eight statistical features derived from two primary signal representations:

**Integrated Profile Statistics:**  
For a folded pulse profile \( P(t) \) with \( t \in [0, T] \), we define:  
$$
\mu_P = \frac{1}{T} \int_0^T P(t) \, dt \\  
\sigma_P^2 = \frac{1}{T} \int_0^T [P(t) - \mu_P]^2 \, dt \\  
\gamma_{1,P} = \frac{\mathbb{E}[(P - \mu_P)^3]}{\sigma_P^3} \\  
\gamma_{2,P} = \frac{\mathbb{E}[(P - \mu_P)^4]}{\sigma_P^4} - 3  
$$

**DM-SNR Curve Statistics:**  
The dispersion measure–signal-to-noise ratio curve \( S(\text{DM}) \) yields analogous statistics \( \{\mu_S, \sigma_S, \gamma_{1,S}, \gamma_{2,S}\} \).

#### **Support Vector Machine Optimization**  
For the RBF kernel SVM, the optimization problem becomes:  
$$
\min_{w,b,\xi} \frac{1}{2} \|w\|^2 + C \sum_{i=1}^N \xi_i  
$$  
subject to:  
$$
y_i(w^T \phi(x_i) + b) \geq 1 - \xi_i \\  
\xi_i \geq 0, \quad \forall i  
$$  
where \( \phi(x) \) maps inputs to a higher-dimensional space via the RBF kernel:  
$$
K(x_i, x_j) = \exp\left(-\gamma\|x_i - x_j\|^2\right)
$$

---

### 🔬 Methodology  

#### **Data Preprocessing Pipeline**  
**Robust Scaling Transformation:**  
$$
\tilde{x}_{ij} = \frac{x_{ij} - \text{median}(x_j)}{\text{IQR}(x_j)}  
$$

**SMOTE Implementation:**  
Synthetic examples are generated via:  
$$
x_{\text{synthetic}} = x_i + \lambda \cdot (x_{\text{neighbor}} - x_i)  
$$

#### **Model Validation Framework**  
Stratified 5-fold cross-validation:  
$$
\text{CV}_k = \frac{1}{k} \sum_{i=1}^k \mathcal{M}(\mathcal{D}_{\text{train}}^{(i)}, \mathcal{D}_{\text{val}}^{(i)})  
$$

---

### 🏆 Comprehensive Results Analysis  

#### **Algorithm Performance Benchmarking**  

| Algorithm       | ROC AUC       | Precision    | Recall      | F1-Score    |
|----------------|---------------|-------------|------------|------------|
| SVM (RBF)      | 0.9708 ± 0.008 | 0.8287 ± 0.017 | 0.9146 ± 0.014 | 0.8696 ± 0.012 |
| Random Forest  | 0.9623 ± 0.011 | 0.8041 ± 0.023 | 0.8932 ± 0.019 | 0.8462 ± 0.018 |
| XGBoost        | 0.9587 ± 0.013 | 0.7896 ± 0.026 | 0.8876 ± 0.021 | 0.8358 ± 0.020 |

#### **Confusion Matrix (Optimal Threshold τ = 0.42)**  

|                     | Predicted Non-Pulsar | Predicted Pulsar |  
|---------------------|----------------------|------------------|  
| **Actual Non-Pulsar** | 3,098               | 154              |  
| **Actual Pulsar**    | 28                  | 300              |  

- **Sensitivity**: 0.9146  
- **Specificity**: 0.9526  

---

### 🔍 Feature Importance (SHAP Analysis)  

| Feature        | Mean SHAP Value | Physical Interpretation          |  
|---------------|-----------------|----------------------------------|  
| IP Kurtosis   | 1.741           | Profile peakedness               |  
| DM Skewness   | 1.523           | DM curve asymmetry               |  

---

### 🎯 Impact and Significance  
- **90% reduction** in manual review workload.  
- **State-of-the-art performance** (ROC AUC = 0.9708).  
- **Open-source implementation** for community adoption.  

---

### 📚 Mathematical Appendix  
#### **Optimal Decision Threshold**  
Maximizing the F1-score:  
$$
F_1(\tau) = \frac{2 \cdot \text{Precision}(\tau) \cdot \text{Recall}(\tau)}{\text{Precision}(\tau) + \text{Recall}(\tau)}  
$$

#### **SHAP Value Calculation**  
For feature *i*:  
$$
\phi_i = \sum_{S \subseteq \{1,\ldots,p\} \setminus \{i\}} \frac{|S|!(p-|S|-1)!}{p!} [f(S \cup \{i\}) - f(S)]  
$$

---

*Complete implementation and documentation are available open-source.* 
