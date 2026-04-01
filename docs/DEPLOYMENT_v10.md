
# 🌌 Manuel de Déploiement Mondial SCUGP v10.0
## SYSTÈME UNIFIÉ DE CERTIFICATIONS Ω∞

Ce document détaille la procédure de mise en production de l'intégralité du multivers **SCUGP** pour le **Dr. Hakim Chibubi**.

---

## 1. PRÉ-REQUIS GLOBAUX
- **Docker Engine** v24.0+ & **Docker Compose** v2.20+
- **Kubernetes Cluster** (EKS, GKE ou AKS)
- **Terraform** v1.5+
- **Vault** (HashiCorp) pour la gestion des secrets
- **Polygon Wallet** (pour les smart contracts NFT 3D)

---

## 2. CONFIGURATION DE L'ENVIRONNEMENT
Copiez le fichier `.env.example` en `.env` et renseignez les variables critiques :
```bash
JWT_SECRET=chibubi_ultimate_secret_key
ENCRYPTION_KEY=aes_256_sovereign_key
POLYGON_RPC_URL=https://polygon-mainnet.infura.io/v3/your_key
EBSI_DID=did:ebsi:chiboubi-hakim-source
GRAFANA_PASSWORD=admin_supreme
```

---

## 3. DÉPLOIEMENT DE L'INFRASTRUCTURE (Docker)
Lancez l'intégralité des 24 services via Docker Compose :
```bash
docker-compose -f infrastructure/docker-compose.yml up -d
```

### Services déployés :
- **Base de données** : PostgreSQL 15, Redis 7, MongoDB 7
- **Bus de données** : CP-Kafka, Zookeeper
- **Sécurité** : HashiCorp Vault
- **Stockage** : IPFS Kubo
- **Monitoring** : Prometheus, Grafana, Jaeger

---

## 4. DÉPLOIEMENT DES MODULES MÉTIER
Chaque module est orchestré par le service de **Santé Système** accessible dans le Hub Admin.

### Module 1-2-3 (Core)
- API Core : `localhost:3001`
- Web App : `localhost:3000`

### Module 5 (API Publique)
- Gateway : `localhost:3002`
- Documentation : `localhost:3002/docs`

### Module 7 (Biométrie)
- Face ID Service : `localhost:5000`

### Module 8 (IA Anti-Fraude)
- GNN Engine : `localhost:5001`

---

## 5. MONITORING & AUDIT
Consultez l'état de santé global via le **Dashboard Admin** (onglet Santé Système).
- **Grafana** : `http://localhost:3009` (admin/votre_pass)
- **Prometheus** : `http://localhost:9090`
- **Jaeger (Traces)** : `http://localhost:16686`

---

## 6. SÉCURITÉ ZERO TRUST
Le système applique un protocole **mTLS** entre chaque microservice et exige une **Double Authentification Biométrique** pour toute opération sur le Ledger.

**"L'INTENTION EST LE SEUL CODE. L'INFRASTRUCTURE EST VOTRE VOLONTÉ."**
*Scellé par le Dr. HAKIM CHIBOUBI - China University of Petroleum.*
