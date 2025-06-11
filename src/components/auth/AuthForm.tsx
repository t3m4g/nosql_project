import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "sonner";


const loginSchema = z.object({
  email: z.string().email({ message: "Adresse email invalide" }),
  password: z.string().min(6, {
    message: "Le mot de passe doit comporter au moins 6 caractères",
  }),
});

const registerDoctorSchema = z
  .object({
    username: z.string().min(3, {
      message: "Le nom d'utilisateur doit contenir au moins 3 caractères",
    }),
    email: z.string().email({
      message: "Veuillez entrer une adresse email valide",
    }),
    firstName: z.string().min(2, {
      message: "Le prénom doit contenir au moins 2 caractères",
    }),
    lastName: z.string().min(2, {
      message: "Le nom doit contenir au moins 2 caractères",
    }),
    password: z.string().min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

const registerPatientSchema = z
  .object({
    name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères" }),
    email: z.string().email({ message: "Adresse email invalide" }),
    password: z.string().min(6, { message: "Le mot de passe doit comporter au moins 6 caractères" }),
    confirmPassword: z.string().min(6, { message: "Veuillez confirmer votre mot de passe" }),
    role: z.enum(["participant", "speaker", "reviewer", "organizer"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type LoginValues = z.infer<typeof loginSchema>;
type RegisterPatientValues = z.infer<typeof registerPatientSchema>;
type RegisterDoctorValues = z.infer<typeof registerDoctorSchema>;

interface AuthFormProps {
  mode: "login" | "registerPatient" | "registerDoctor";
}

export const AuthForm = ({ mode }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginForm = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const patientForm = useForm<RegisterPatientValues>({
    resolver: zodResolver(registerPatientSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "", role: "participant" },
  });

  const doctorForm = useForm<RegisterDoctorValues>({
    resolver: zodResolver(registerDoctorSchema),
    defaultValues: { username: "", email: "", firstName: "", lastName: "", password: "", confirmPassword: "" },
  });

  const handleLogin = async (values: LoginValues) => {
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Erreur de connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePatientRegister = async (values: RegisterPatientValues) => {
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Inscription réussie !");
      navigate("/login");
    } catch (err) {
      toast.error("Erreur lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDoctorRegister = async (values: RegisterDoctorValues) => {
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Inscription du docteur réussie !");
      navigate("/login");
    } catch (err) {
      toast.error("Erreur lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md w-full">
      {mode === "login" && (
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
            <FormField control={loginForm.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={loginForm.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} placeholder="Mot de passe" disabled={isLoading} {...field} />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>
        </Form>
      )}

      {mode === "registerPatient" && (
        <Form {...patientForm}>
          <form onSubmit={patientForm.handleSubmit(handlePatientRegister)} className="space-y-6">
            <FormField control={patientForm.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input placeholder="Nom complet" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={patientForm.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={patientForm.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Créer un mot de passe" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={patientForm.control} name="confirmPassword" render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer le mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirmer mot de passe" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Inscription..." : "S'inscrire"}
            </Button>
          </form>
        </Form>
      )}

      {mode === "registerDoctor" && (
        <Form {...doctorForm}>
          <form onSubmit={doctorForm.handleSubmit(handleDoctorRegister)} className="space-y-6">
            <FormField control={doctorForm.control} name="firstName" render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Prénom" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={doctorForm.control} name="lastName" render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Nom" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={doctorForm.control} name="username" render={({ field }) => (
              <FormItem>
                <FormLabel>Nom d'utilisateur</FormLabel>
                <FormControl>
                  <Input placeholder="Username" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={doctorForm.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={doctorForm.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Mot de passe" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={doctorForm.control} name="confirmPassword" render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirmer mot de passe" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Inscription..." : "Créer un compte"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};
