"use client";

import { FC } from "react";
import Link from "next/link";

export const NavItem = ({
  href,
  Icon,
}: {
  href: string;
  Icon: FC<{ className: string }>;
}) => (
  <li>
    <Link href={href}>
      <Icon className="transition-all fill-greyish-blue hover:fill-red" />
    </Link>
  </li>
);
