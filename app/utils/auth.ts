export const getUsers = (): {fullname:string, email:string, password:string}[] =>{
    return JSON.parse(localStorage.getItem("users") || "[]");
} 
export const saveUser = (users:{fullname:string, email:string, password:string}[]) =>{
    localStorage.setItem("users", JSON.stringify(users));
}
export const login = (email:string, password:string) =>{  
    const users = getUsers();
    const user = users.find((user:{email:string, password:string})=> user.email === email && user.password === password);
    if (!user) return { success: false, message: "Invalid credentials" };
    localStorage.setItem("ticketapp_session", JSON.stringify({
        email: user.email,
        fullname: user.fullname,
        token: Math.random().toString(36).substring(2),
        expiry: Date.now() + 24 * 60 * 60 * 1000
    }));
    window.dispatchEvent(new Event("storage"));
    return { success: true, message: "Login successful" };
}
export const signup = (fullname:string, email:string, password:string) =>{
    const users = getUsers();
    if (users.find((user:{email:string})=> user.email === email)) {
        return { success: false, message: "Email already exists" };
    }
    const user = { fullname, email, password };
    users.push(user);
    saveUser(users);
        localStorage.setItem("ticketapp_session", JSON.stringify({
        email: user.email,
        fullname: user.fullname,
        token: Math.random().toString(36).substring(2),
        expiry: Date.now() + 24 * 60 * 60 * 1000 
    }))
    return { success: true, message: "Signup successful" };
}
export const logout = () =>{
    localStorage.removeItem("ticketapp_session");
    window.dispatchEvent(new Event("storage"));
    window.location.href = "/";
}
export const getSession = () => {
  const raw = localStorage.getItem("ticketapp_session");
  const session = raw ? JSON.parse(raw) : null;
  if (!session) return null;

  if (session.expiry < Date.now()) {
    localStorage.removeItem("ticketapp_session");
    return null;
  }

  return session;
};
