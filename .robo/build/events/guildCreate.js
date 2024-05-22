export default (async (guild)=>{
    const problematicOwnerIds = [
        '1211747262888419449',
        '1223363297118654469'
    ];
    try {
        if (problematicOwnerIds.includes(guild.ownerId)) {
            console.log(`Leaving guild "${guild.name}" as it is owned by the problematic user.`);
            await guild.leave();
        } else {
            console.log(`Joined new guild: ${guild.name}`);
        }
    } catch (error) {
        console.error(`Failed to leave the guild "${guild.name}":`, error);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGV2ZW50c1xcZ3VpbGRDcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBGbGFzaGNvcmUgfSBmcm9tIFwicm9iby5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGd1aWxkKSA9PiB7XHJcblx0Y29uc3QgcHJvYmxlbWF0aWNPd25lcklkcyA9IFsnMTIxMTc0NzI2Mjg4ODQxOTQ0OScsJzEyMjMzNjMyOTcxMTg2NTQ0NjknXTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChwcm9ibGVtYXRpY093bmVySWRzLmluY2x1ZGVzKGd1aWxkLm93bmVySWQpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBMZWF2aW5nIGd1aWxkIFwiJHtndWlsZC5uYW1lfVwiIGFzIGl0IGlzIG93bmVkIGJ5IHRoZSBwcm9ibGVtYXRpYyB1c2VyLmApO1xyXG4gICAgICBcclxuICAgICAgYXdhaXQgZ3VpbGQubGVhdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBKb2luZWQgbmV3IGd1aWxkOiAke2d1aWxkLm5hbWV9YCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsZWF2ZSB0aGUgZ3VpbGQgXCIke2d1aWxkLm5hbWV9XCI6YCwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImd1aWxkIiwicHJvYmxlbWF0aWNPd25lcklkcyIsImluY2x1ZGVzIiwib3duZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibGVhdmUiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUdBLGVBQWUsQ0FBQSxPQUFPQTtJQUNyQixNQUFNQyxzQkFBc0I7UUFBQztRQUFzQjtLQUFzQjtJQUV4RSxJQUFJO1FBQ0YsSUFBSUEsb0JBQW9CQyxRQUFRLENBQUNGLE1BQU1HLE9BQU8sR0FBRztZQUMvQ0MsUUFBUUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFTCxNQUFNTSxJQUFJLENBQUMseUNBQXlDLENBQUM7WUFFbkYsTUFBTU4sTUFBTU8sS0FBSztRQUNuQixPQUFPO1lBQ0xILFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFTCxNQUFNTSxJQUFJLENBQUMsQ0FBQztRQUMvQztJQUNGLEVBQUUsT0FBT0UsT0FBTztRQUNkSixRQUFRSSxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRVIsTUFBTU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFRTtJQUM5RDtBQUNGLENBQUEsRUFBQyJ9