import { Flashcore } from "robo.js";
export const config = {
    description: 'Bot master only command!',
    options: [
        {
            type: 'integer',
            name: 'powerlevel',
            description: 'The powerlevel to set',
            required: true
        },
        {
            type: 'user',
            name: 'user',
            description: 'The user to set the powerlevel for',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    const userId = interaction.user.id;
    const powerlevel = interaction.options.get('powerlevel')?.value;
    const executor_powerlevel = await Flashcore.get('powerlevel', {
        namespace: userId
    });
    const user = interaction.options.get('user')?.user;
    if (executor_powerlevel >= 100) {
        Flashcore.set('powerlevel', powerlevel, {
            namespace: user?.id
        });
        return {
            content: `Set powerlevel to ${powerlevel} for ${user?.username}`
        };
    } else {
        await interaction.reply({
            content: 'You do not have the required powerlevel to use this command.',
            ephemeral: true
        });
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGNvbW1hbmRzXFxzZXRsZXZlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ3JvYm8uanMnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUsIEF0dGFjaG1lbnQsIENvbW1hbmRJbnRlcmFjdGlvbiwgQ29tbWFuZEludGVyYWN0aW9uT3B0aW9uUmVzb2x2ZXIsIEVtYmVkQnVpbGRlciwgRW1iZWRGaWVsZCwgSW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tICdvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG5cdGRlc2NyaXB0aW9uOiAnQm90IG1hc3RlciBvbmx5IGNvbW1hbmQhJyxcclxuICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7dHlwZTogJ2ludGVnZXInLG5hbWU6ICdwb3dlcmxldmVsJyxkZXNjcmlwdGlvbjogJ1RoZSBwb3dlcmxldmVsIHRvIHNldCcscmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgICAgIHt0eXBlOiAndXNlcicsbmFtZTogJ3VzZXInLGRlc2NyaXB0aW9uOiAnVGhlIHVzZXIgdG8gc2V0IHRoZSBwb3dlcmxldmVsIGZvcicscmVxdWlyZWQ6IHRydWV9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogQ29tbWFuZEludGVyYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBpbnRlcmFjdGlvbi51c2VyLmlkXHJcbiAgICBjb25zdCBwb3dlcmxldmVsID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXQoJ3Bvd2VybGV2ZWwnKT8udmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgY29uc3QgZXhlY3V0b3JfcG93ZXJsZXZlbCA9IGF3YWl0IEZsYXNoY29yZS5nZXQoJ3Bvd2VybGV2ZWwnLHtuYW1lc3BhY2U6dXNlcklkfSkgYXMgbnVtYmVyO1xyXG4gICAgY29uc3QgdXNlciA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCd1c2VyJyk/LnVzZXI7XHJcbiAgICBpZihleGVjdXRvcl9wb3dlcmxldmVsID49IDEwMCl7XHJcbiAgICAgICAgRmxhc2hjb3JlLnNldCgncG93ZXJsZXZlbCcscG93ZXJsZXZlbCx7bmFtZXNwYWNlOnVzZXI/LmlkfSk7XHJcbiAgICAgICAgcmV0dXJuIHtjb250ZW50OmBTZXQgcG93ZXJsZXZlbCB0byAke3Bvd2VybGV2ZWx9IGZvciAke3VzZXI/LnVzZXJuYW1lfWB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cdFx0YXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoeyBjb250ZW50OiAnWW91IGRvIG5vdCBoYXZlIHRoZSByZXF1aXJlZCBwb3dlcmxldmVsIHRvIHVzZSB0aGlzIGNvbW1hbmQuJywgZXBoZW1lcmFsOiB0cnVlIH0pXHJcblx0fVxyXG5cclxufSBcclxuIl0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsInR5cGUiLCJuYW1lIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsInBvd2VybGV2ZWwiLCJnZXQiLCJ2YWx1ZSIsImV4ZWN1dG9yX3Bvd2VybGV2ZWwiLCJuYW1lc3BhY2UiLCJzZXQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJyZXBseSIsImVwaGVtZXJhbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixVQUFTO0FBSXZELE9BQU8sTUFBTUMsU0FBd0I7SUFDcENDLGFBQWE7SUFDVkMsU0FBUztRQUNMO1lBQUNDLE1BQU07WUFBVUMsTUFBTTtZQUFhSCxhQUFhO1lBQXdCSSxVQUFVO1FBQUk7UUFDdkY7WUFBQ0YsTUFBTTtZQUFPQyxNQUFNO1lBQU9ILGFBQWE7WUFBcUNJLFVBQVU7UUFBSTtLQUM5RjtBQUNMLEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDbEIsTUFBTUMsU0FBU0QsWUFBWUUsSUFBSSxDQUFDQyxFQUFFO0lBQ2xDLE1BQU1DLGFBQWFKLFlBQVlKLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLGVBQWVDO0lBQzFELE1BQU1DLHNCQUFzQixNQUFNZCxVQUFVWSxHQUFHLENBQUMsY0FBYTtRQUFDRyxXQUFVUDtJQUFNO0lBQzlFLE1BQU1DLE9BQU9GLFlBQVlKLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLFNBQVNIO0lBQzlDLElBQUdLLHVCQUF1QixLQUFJO1FBQzFCZCxVQUFVZ0IsR0FBRyxDQUFDLGNBQWFMLFlBQVc7WUFBQ0ksV0FBVU4sTUFBTUM7UUFBRTtRQUN6RCxPQUFPO1lBQUNPLFNBQVEsQ0FBQyxrQkFBa0IsRUFBRU4sV0FBVyxLQUFLLEVBQUVGLE1BQU1TLFNBQVMsQ0FBQztRQUFBO0lBQzNFLE9BQ0k7UUFDTixNQUFNWCxZQUFZWSxLQUFLLENBQUM7WUFBRUYsU0FBUztZQUFnRUcsV0FBVztRQUFLO0lBQ3BIO0FBRUQsQ0FBQSxFQUFDIn0=