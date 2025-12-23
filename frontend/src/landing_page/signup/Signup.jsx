import React from "react";

const Signup = () => {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f6f8",
    },
    card: {
      width: "350px",
      padding: "25px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    heading: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#387ed1",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    info: {
      marginTop: "15px",
      fontSize: "13px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account</h2>

        <input type="text" placeholder="Full Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />

        <button style={styles.button}>Sign Up</button>

        <p style={styles.info}>
          Sorry for this thing- This signup page is not fully completed yet.
          <br />
          Work is in progress.
        </p>
      </div>
    </div>
  );
};

export default Signup;
