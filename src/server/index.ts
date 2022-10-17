import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function CreateUser(name: string, email: string) {
	await prisma.user.create({ data: { name, email } });
}

async function GetAllUsers() {
	console.log(await prisma.user.findMany());
}

RegisterCommand(
	"prisma-create",
	function (_: any, args: string[]) {
		CreateUser(args[0], args[1]);
	},
	false
);

RegisterCommand(
	"prisma-print",
	function () {
		GetAllUsers();
	},
	false
);
