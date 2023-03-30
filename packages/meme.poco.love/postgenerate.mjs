import fse from "fs-extra";

fse.copySync(".output/public", "../../dist/");
