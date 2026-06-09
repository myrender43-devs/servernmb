import styles from "./Packages.module.css";

const packages = [
  {
    id: 1,
    name: "Basic",
    description: "Basic Starlink Plan",
    price: "ZMW 15.00",
    tag: "Basic",
  },
  {
    id: 2,
    name: "Standard",
    description: "Standard Starlink Plan",
    price: "ZMW 25.00",
    tag: "Standard",
  },
  {
    id: 3,
    name: "Premium Plan",
    description: "Premium Starlink Plan",
    price: "ZMW 45.00",
    tag: "Premium",
  },
  {
    id: 4,
    name: "Unlimited Plan",
    description: "Unlimited Starlink Plan",
    price: "ZMW 95.00",
    tag: "Unlimited",
  },
];

export default function Packages() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Join the Shared Satellite Network</h1>
        <p>
          Experience the future of connectivity with our Shared Satellite
          Network. Using advanced Crowdsharing Technology, we deliver high-speed
          Starlink data directly to your smartphone, anywhere in Zambia. Choose
          your plan and join the network instantly using MTN MoMo.
        </p>
      </div>
      <PackageCard />
      <div className={styles.header}>
        <span className={styles.icon}>🛍️</span>
        <h2>Select Your Plan</h2>
      </div>

      <div className={styles.cards}>
        {packages.map((pkg) => (
          <div key={pkg.id} className={styles.card}>
            <div className={styles.cardTop}>
              <h3>{pkg.name}</h3>
              <span className={styles.tag}>{pkg.tag}</span>
            </div>

            <p className={styles.description}>{pkg.description}</p>

            <div className={styles.price}>
              {pkg.price}
              <span className={styles.month}> /month</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PackageCard({ name, description, price, tag }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{name}</h3>
        <span className={styles.tag}>{tag}</span>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.price}>
        {price}
        <span className={styles.month}> /month</span>
      </div>
      <div>
        <h1>Processing...</h1>
        <p>Securely redirecting for payments through MTN MoMo</p>
      </div>
    </div>
  );
}
