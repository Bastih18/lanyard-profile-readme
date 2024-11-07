import axios from "axios";

export default function Home() {
    // This component will not render any HTML since we will use getServerSideProps to return JSON
    return null;
}

export async function getServerSideProps(context: any) {
    // Get the monitored user count if needed from an API or set a default value
    let monitoredUserCount = 116;
    try {
        const response = await axios.get("https://lanapi.pixelvault.co", { timeout: 1000 });
        monitoredUserCount = response.data.monitored_user_count;
    } catch (error) {
        console.error("Failed to fetch user count:", error);
    }

    // Define the JSON response directly
    const jsonResponse = {
        data: {
            info: "PixelVault operates a self-hosted, customized instance of lanyard-profile-readme, an open-source tool that allows you to display your Discord presence on your GitHub profile. Find out more here: https://github.com/cnrad/lanyard-profile-readme",
            monitored_user_count: monitoredUserCount,
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
