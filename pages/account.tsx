import Membership from "@/components/Membership";
import payments from "@/lib/stripe";
import useAuth from "@/useHooks/useAuth";
import useSubscription from "@/useHooks/useSubscription";
import {
  getProduct,
  getProducts,
  Product,
} from "@stripe/firestore-stripe-payments";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NetflixLogo from "../assets/Netflix_2015.png";
import NetflixAvatar from "../assets/Netflix-avatar.png";
import playButton from "../assets/play-button7.png";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  products: Product[];
}

function Account({ products }: Props) {
  console.log(products);
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);
  return (
    <div>
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-[#141414]">
        <Link href="/">
          <Image
            src={NetflixLogo}
            width={100}
            height={100}
            alt=""
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <Image
            src={NetflixAvatar}
            width={35}
            height={35}
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>
      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <Image src={playButton} alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member Since {subscription?.created}
            </p>
          </div>
        </div>
        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4>Plan Details</h4>
          <div>
            {
              products.filter(
                (product) => product.id === subscription?.product
              )[0]?.name
            }
          </div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
            Change Plan
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
}

export default Account;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  return {
    props: {
      products,
    },
  };
};
