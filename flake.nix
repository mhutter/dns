{
  # Lock dnscontrol to < v4.12 until a fix for #3016 is released (v4.12.2?)
  # https://github.com/StackExchange/dnscontrol/issues/3016
  inputs.nixpkgs.url = "github:NixOS/nixpkgs?rev=78fde8eb6016e101554f01899f07f2ff3bfd6c55";
  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShell."${system}" = pkgs.mkShell {
        packages = with pkgs; [ dnscontrol ];
      };
    };
}
