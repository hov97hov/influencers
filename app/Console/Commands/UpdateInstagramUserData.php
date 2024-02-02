<?php

namespace App\Console\Commands;

use App\Interface\LoginInterface;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class UpdateInstagramUserData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'instagram:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    private LoginInterface $loginService;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(LoginInterface $loginService)
    {
        parent::__construct();

        $this->loginService = $loginService;
    }

    /**
     * @return string
     */
    public function handle(): string
    {
        Log::info($this->loginService->updateInstagramUsers());

        return $this->loginService->updateInstagramUsers();
    }
}