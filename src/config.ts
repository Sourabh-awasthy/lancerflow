import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Embeddable House",
    chainId: "messier-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr18mv007wpczsgl2rxcg4kd7zr57wurja94rudrsnhzmcktju5djpsst7j7v",
            cw721: "andr1e46cvmf26p24mt0hpnq8mx6h9tcue509282x63ynqp09n049slaqu3cuq2",
            name: "Marketplace Example",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        },
        
    ],
};  

export default CONFIG;
