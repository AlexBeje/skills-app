import { Image, CSSObject } from "@mantine/core";

export default function Avatar() {
  return (
    <Image
      src="https://media-exp1.licdn.com/dms/image/C4E03AQHS_ZXR0GmjuA/profile-displayphoto-shrink_800_800/0/1652867446208?e=1663200000&v=beta&t=4XHvcX6kWwKPXGApVBuUNgzwlCTevau1rTf9YntGHDI"
      alt="avatar"
      sx={styles}
      radius="sm"
    />
  );
}

// styles object is compatible with every Mantine component
const styles: CSSObject = {
  width: "4rem",
};
