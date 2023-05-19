"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cns from "classnames";

export const NavItem = ({
  href,
  Icon,
}: {
  href: string;
  Icon: FC<{ className: string }>;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cns("group", { "pointer-events-none": isActive })}
      >
        <Icon
          className={cns(
            "transition-all fill-greyish-blue",
            { "group-hover:fill-red": !isActive },
            { "fill-pure-white": isActive }
          )}
        />
      </Link>
    </li>
  );
};
