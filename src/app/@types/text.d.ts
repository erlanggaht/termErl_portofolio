import { ReactElement } from "react";
/**
 * type TypeTeks di TypeScript mendefinisikan struktur dengan properti opsional about dan list_command,
 * serta properti list_directory yang diperlukan, semuanya berisi elemen React atau array React 
 * @property {ReactElement} about - Properti `about` dalam tipe `TypeTeks` adalah elemen React yang
 * memberikan informasi atau konten tentang sesuatu. Ini opsional, artinya bisa atau tidak
 * ada dalam objek bertipe `TypeTeks`.
 * @property {list_command} - Properti `list_command` pada tipe `TypeTeks` adalah objek yang
 * berisi properti berikut:
 * @property {list_directory} - Properti `list_directory` dalam tipe `TypeTeks` adalah tipe
 * `Reaksi.ReactNode`. Artinya ia dapat menerima node React yang valid sebagai nilainya, seperti a
 * komponen, string, array komponen, atau bahkan `null` atau `undefined`. Ini memberikan fleksibilitas
 */
type TypeTeks = {
  about?: ReactElement;
  list_command?: {
    htmllist_command_Route?: React.ReactNode[];
    htmllist_command_CatFile?: React.ReactNode[];
    htmllist_command_RunFile?: React.ReactNode;
    htmllist_command_Other?: React.ReactNode[];
  };
  list_directory: React.ReactNode;
};
export default TypeTeks;
