import { useState } from "react";
import { Typography, Input, Button, Card } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export function AuthPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className="grid text-center h-screen items-center p-8 bg-gray-100">
      <Card className="w-full max-w-md mx-auto p-6">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          SITE ANNONCE
        </Typography>
        <Typography className="mb-6 text-gray-600 font-normal text-[18px]">
          Entrez votre e-mail et votre mot de passe pour vous connecter
        </Typography>
        <form action="#" className="text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Votre e-mail
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="nom@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Mot de passe
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Button color="gray" size="lg" className="mt-6" fullWidth>
            Se connecter
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Mot de passe oublié
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            Se connecter avec Google
          </Button>
          <Button
            variant="outlined"
            size="lg"
            className="mt-4 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg`}
              alt="facebook"
              className="h-6 w-6"
            />{" "}
            Se connecter avec Facebook
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Pas encore enregistré ?{" "}
            <a href="#" className="font-medium text-gray-900">
              Créer un compte
            </a>
          </Typography>
        </form>
      </Card>
    </section>
  );
}

export default AuthPage;
