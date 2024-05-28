import Client from 'ssh2-sftp-client';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
function deployApp(local, remote) {
	return new Promise(resolve => {
		const sftp = new Client();
		const { ssh } = config;
		sftp
			.connect(ssh)
			.then(() => {
				console.log(chalk.blue(`>>>正在部署...`));
				return sftp.uploadDir(local, remote);
			})
			.finally(() => {
				sftp.end();
				resolve();
			});
	});
}
const config = {
	ssh: {
		host: '120.25.250.39',
		port: '23022',
		username: 'root',
		password: '2018@Sz-LonBondep;',
	},
	localPath: `../.vitepress/dist/`,
	remotePath: `/usr/local/nginx/nb_html/resource/notes/`,
};
(async () => {
	console.log(chalk.blue(`>>>开始部署...`));
	await deployApp(path.resolve(__dirname, config.localPath), config.remotePath);
	console.log(chalk.green(`>>>部署成功`));
})();
