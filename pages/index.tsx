import axios from "axios";

export default function Home() {
    return null;
}

export async function getServerSideProps(context: any) {
    const jsonResponse = {
        data: {
            info: "PixelVault operates a self-hosted, customized instance of lanyard-profile-readme, an open-source tool that allows you to display your Discord presence on your GitHub profile. Find out more here: https://github.com/cnrad/lanyard-profile-readme",
            pixelvault_discord_invite: "https://discord.gg/pxlvltco"
        },
        success: true
    };

    // Return the JSON response
    context.res.setHeader("Content-Type", "application/json");
    context.res.write(JSON.stringify(jsonResponse));
    context.res.end();

    return { props: {} };
}
